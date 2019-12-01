import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Feedback () {
    const [feedback, setFeedback] = useState(null);
    const [usernames, setUserNames] = useState(null);

    const fetchData = () => {
        fetch('/api/feedback/all')
            .then(results => results.json())
            .then(data => {
                setFeedback(data);
            });
        fetch('/api/accounts/all')
            .then(results => results.json())
            .then(data => {
                const names = data.map(user => ({username :user.USERNAME, accountId: user.ACCOUNT_ID}));
                setUserNames(names);
            });
    };

    const getUsernames = () => {
        let final = {};
        usernames.map(user => (final[user.accountId]=`${user.username}`));
        return final;
    };

    const feedbackColumns = () => [
        { title: 'Feedback ID', field: 'FEEDBACK_ID', editable: 'never'},
        { title: 'Feedback Text', field: 'FEEDBACK_TEXT' },
        { title: 'Category', field: 'CATEGORY', lookup: {
                'CSR EFFECTIVENESS': 'CSR Effectiveness',
                'CHAUFFER POLITENESS': 'Chauffeur Politeness',
                'HYGIENE': 'Hygiene',
                'APP DESIGN': 'App Design',
                'OTHER': 'Other'
            }},
        { title: 'Rating', field: 'RATING', type: 'numeric', lookup: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5'
            }},
        { title: 'Username', field: 'ACCOUNT_ID', lookup: getUsernames(), editable: 'onAdd'},

    ];

    useEffect(() => {
        fetchData();
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    function addCall (data)  {
        console.log(data);
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({
                feedbackId: null,
                feedbackText: data.FEEDBACK_TEXT,
                category: data.CATEGORY,
                rating: data.RATING,
                accountId: data.ACCOUNT_ID
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                console.log('error is', error);
                setOpen(true);
            });
    }

    function updateCall (data)  {
        fetch(`/api/feedback/${data.FEEDBACK_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                feedbackText: data.FEEDBACK_TEXT,
                category: data.CATEGORY,
                rating: data.RATING,
                accountId: data.ACCOUNT_ID
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                console.log('error is', error);
                setOpen(true);
            });
    }

    function deleteCall (data) {
        fetch(`/api/feedback/${data.FEEDBACK_ID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                console.log('error is', error);
                setOpen(true);
            });
    }

    return(
        <div>
            { !feedback || !usernames ? 'Loading...' :
                <TableWithSearch
                    title ={'Feedback'}
                    data={feedback}
                    columns={feedbackColumns()}
                    addCall={addCall}
                    updateCall={updateCall}
                    deleteCall={deleteCall}
                /> }

            {open && <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Oops! Something went wrong</span>}
                action={[

                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />}
        </div>
    )
}