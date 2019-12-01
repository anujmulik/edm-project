import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


export default function Chauffeurs () {
    const [chauffeurs, setChauffeurs] = useState(null);
    const [states, setStates] = useState(null);

    const fetchData = () => {
        fetch('/api/chauffeur/all')
            .then(results => results.json())
            .then(data => {
                setChauffeurs(data);
            });

        fetch('/api/states/all')
            .then(results => results.json())
            .then(data => {
                setStates(data);
            });
    };

    const getStates = () => {
        let final = {};
        states.map(state => (final[state.STATE_CODE]=`${state.STATE_NAME}`));
        return final;
    };

    const chauffeurColumns = () => [
        { title: 'Employee ID', field: 'EMPLOYEE_ID', editable: 'never' },
        { title: 'First Name', field: 'FIRST_NAME' },
        { title: 'Last Name', field: 'LAST_NAME',  },
        { title: 'Expiry Date', field: 'EXPIRY_DATE', type: 'date' },
        { title: 'State', field: 'STATE', lookup: getStates() },
        { title: 'DL Number', field: 'DL_NUMBER'}
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
        fetch('/api/chauffeur', {
            method: 'POST',
            body: JSON.stringify({
                employeeId: null,
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CH',
                dlNumber: data.DL_NUMBER,
                expiryDate: data.EXPIRY_DATE,
                issuingState: data.STATE
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
    }


    function updateCall (data)  {
        fetch(`/api/chauffeur/${data.EMPLOYEE_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CH',
                dlNumber: data.DL_NUMBER,
                expiryDate: data.EXPIRY_DATE,
                issuingState: data.STATE
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
    }

    function deleteCall (data)  {
        fetch(`/api/chauffeur/${data.EMPLOYEE_ID}`, {
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
    }


    return(
        <div>
            { !chauffeurs || !states ? 'Loading...' : <TableWithSearch
                title ={'Chauffeurs'}
                data={chauffeurs}
                columns={chauffeurColumns()}
                addCall={addCall}
            updateCall={updateCall}
            deleteCall={deleteCall}/> }

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