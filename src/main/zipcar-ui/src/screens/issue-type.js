import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const issueTypeColumns = [
    { title: 'Issue Type ID', field: 'ISSUE_TYPE_ID', editable: 'never'},
    { title: 'SLA', field: 'SLA', type: 'numeric' },
    { title: 'Name', field: 'NAME' }
];

export default function IssueTypes () {
    const [issueTypes, setIssueTypes] = useState(null);

    const fetchData = () => {
        fetch('/api/issue-types/all')
            .then(results => results.json())
            .then(data => {
                setIssueTypes(data);
            });
    };

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

    const addCall = (data) =>  {
        fetch('/api/issue-types', {
            method: 'POST',
            body: JSON.stringify({
                "sla": data.SLA,
                "name": data.NAME
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                setOpen(true);
            });
    };

     const updateCall =  (data) =>  {
        fetch(`/api/issue-types/${data.ISSUE_TYPE_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                "sla": data.SLA,
                "name": data.NAME
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                setOpen(true);
            });
    };

     const deleteCall  = (data) =>  {
        fetch(`/api/issue-types/${data.ISSUE_TYPE_ID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(handleErrors)
            .then(response => fetchData())
            .catch((error) => {
                setOpen(true);
            });
    };

    return(
        <div>
            { !issueTypes ? 'Loading...' :
                <TableWithSearch
                    title ={'Issue Types'}
                    data={issueTypes}
                    columns={issueTypeColumns}
                    fetchCall={fetchData}
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