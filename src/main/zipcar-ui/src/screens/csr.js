import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import {MTableCell, MTableEditField} from "material-table";
import _ from 'lodash';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const csrColumns = [
    { title: 'Employee ID', field: 'EMPLOYEE_ID', editable: 'never' },
    { title: 'First Name', field: 'FIRST_NAME' },
    { title: 'Last Name', field: 'LAST_NAME'},
    { title: 'Escalation Contact', field: 'ESCALATION_CONTACT'},
    { title: 'Shift Details', field: 'SHIFT_DETAILS', lookup: {A:'A', B:'B',C:'C'}},
    { title: 'Email ID', field: 'EMAIL_ID'}
];

export default function CSR () {

    const [csr, setCsr] = useState(null);

    const getCSRExceptSelected = (rowData) => {

        let final = {};
        csr.map(emp => (final[emp.EMPLOYEE_ID]=`${emp.FIRST_NAME} ${emp.LAST_NAME}`));

        if (!_.isEmpty(rowData))
            delete final[rowData.EMPLOYEE_ID];

        return final;

    };

    const components = {
        EditField: props => {
            if (props.columnDef.field === 'ESCALATION_CONTACT') {
                _.update(props, 'columnDef.lookup', () => getCSRExceptSelected(props.rowData));
                return (
                    <MTableEditField {...props}/>
                );
            }
            else {
                return <MTableEditField {...props}/>;
            }

        },
        Cell: props => {
            if (props.columnDef.field === 'ESCALATION_CONTACT') {
                return (
                    <MTableCell {...props} value={props.rowData.ESCALATION_CONTACT_NAME}/>
                );
            }
            else {
                return <MTableCell {...props}/>;
            }
        }

    };


    const fetchData = () => {
        fetch('/api/csr/all')
            .then(results => results.json())
            .then(data => {
                setCsr(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);



    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

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
        console.log('the data is', data);
            fetch('/api/csr', {
                method: 'POST',
                body: JSON.stringify({
                    employeeId: null,
                    firstName: data.FIRST_NAME,
                    lastName: data.LAST_NAME,
                    type: 'CSR',
                    escalationContact: data.ESCALATION_CONTACT,
                    emailId: data.EMAIL_ID,
                    shiftDetails: data.SHIFT_DETAILS
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
        fetch(`/api/csr/${data.EMPLOYEE_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CSR',
                escalationContact: data.ESCALATION_CONTACT,
                emailId: data.EMAIL_ID,
                shiftDetails: data.SHIFT_DETAILS
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

    function deleteCall (data)  {
        fetch(`/api/csr/${data.EMPLOYEE_ID}`, {
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
            { !csr ? 'Loading...' : <TableWithSearch
                title ={'Customer Service Representatives'}
                data={csr}
                columns={csrColumns}
                addCall={addCall}
                updateCall={updateCall}
                deleteCall={deleteCall}
                components={components}
            />

            }

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