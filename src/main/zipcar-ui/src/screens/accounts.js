import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Accounts() {
    const [accounts, setAccounts] = useState(null);

    const fetchData = () => {
        fetch('/api/accounts/all')
            .then(results => results.json())
            .then(data => {
                setAccounts(data);
            });
    };

    const components = {};

    const accountsColumns = () => [

        {title: 'Customer ID', field: 'CUSTOMER_ID', editable: 'never'},
        {title: 'Email ID', field: 'EMAIL', editable: 'onAdd'},
        {title: 'First Name', field: 'FIRST_NAME'},
        {title: 'Last Name', field: 'LAST_NAME'},
        {title: 'DL Number', field: 'DL_NUMBER'},
        {title: 'Date of Birth', field: 'DOB', editable: 'onAdd'},
        {title: 'Street Address', field: 'STREET_ADDRESS'},
        {title: 'City', field: 'CITY'},
        {title: 'State', field: 'STATE'},
        {title: 'Country', field: 'COUNTRY'},
        {title: 'Zip Code', field: 'ZIPCODE'},
        {title: 'DL Expiry Date', field: 'DL_EXPIRY_DATE', type: 'datetime'},
        {title: 'DL Issue State', field: 'DL_ISSUE_STATE'},
        {title: 'Account ID', field: 'ACCOUNT_ID'},
        {title: 'Is Active', field: 'IS_ACTIVE', editable: 'never'},
        {title: 'Username', field: 'USERNAME'},
        {title: 'Password', field: 'PASSWORD', type: 'password'},
        {title: 'Plan ID', field: 'PLAN_ID'},
        {title: 'Plan Type', field: 'TYPE'},
        {title: 'Plan Start Date', field: 'PLAN_START_DATE', type: 'datetime'},
        {title: 'Plan End Date', field: 'PLAN_END_DATE', type: 'datetime'},
        {title: 'Amount Due', field: 'AMOUNT_DUE', type: 'currency'},

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

    function addCall(data) {
        fetch('/api/accounts', {
            method: 'POST',
            body: JSON.stringify({
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                email: data.EMAIL,
                dlNumber: data.DL_NUMBER,
                phone: data.PHONE,
                dateOfBirth: data.DOB,
                streetAddress: data.STREET_ADDRESS,
                city: data.CITY,
                state: data.STATE,
                country: data.COUNTRY,
                zipCode: data.ZIPCODE,
                dlExpiryDate: data.DL_EXPIRY_DATE,
                issueState: data.DL_ISSUE_STATE,
                username: data.USERNAME,
                password: data.PASSWORD,
                planType: data.TYPE
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

    function updateCall(data) {
        fetch(`/api/accounts/${data.ACCOUNT_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                dlNumber: data.DL_NUMBER,
                phone: data.PHONE,
                streetAddress: data.STREET_ADDRESS,
                city: data.CITY,
                state: data.STATE,
                country: data.COUNTRY,
                zipCode: data.ZIPCODE,
                dlExpiryDate: data.DL_EXPIRY_DATE,
                issueState: data.DL_ISSUE_STATE,
                password: data.PASSWORD
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

    function deactivateAccount(data) {
        fetch(`/api/accounts/deactivate?${data.ACCOUNT_ID}`, {
            method: 'PUT',
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

    function selectPlan(data) {
        fetch(`/api/accounts/plans?${data.ACCOUNT_ID}&${data.PLAN_ID}`, {
            method: 'PUT',
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


    return (
        <div>
            {!accounts ? 'Loading...' :
                <TableWithSearch
                    title={'Accounts'}
                    data={accounts}
                    columns={accountsColumns()}
                    addCall={addCall}
                    updateCall={updateCall}
                    components={components}
                />}

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
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />}
        </div>
    )
}