import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {MTableAction} from "material-table";

export default function Payments() {
    const [payments, setPayments] = useState(null);
    const [usernames, setUserNames] = useState(null);

    const fetchData = () => {
        fetch('/api/payments/all')
            .then(results => results.json())
            .then(data => {
                setPayments(data);
            });

        fetch('/api/accounts/all')
            .then(results => results.json())
            .then(data => {
                const names = data.map(user => ({username: user.USERNAME, accountId: user.ACCOUNT_ID}));
                setUserNames(names);
            });
    };


    const getUsernames = () => {
        let final = {};
        usernames.map(user => (final[user.accountId] = `${user.username}`));
        return final;
    };

    const paymentColumns = () => [
        {title: 'Booking ID', field: 'BOOKING_ID', editable: 'never'},
        {title: 'Payment ID', field: 'PAYMENT_ID', editable: 'never'},
        {title: 'Account ID', field: 'ACCOUNT_ID', lookup: getUsernames(), editable: 'onAdd'},
        {title: 'Amount', field: 'AMOUNT', type: 'currency'},
        {title: 'Street Address', field: 'BILLING_STR_ADD'},
        {title: 'City', field: 'BILLING_CITY'},
        {title: 'State', field: 'BILLING_STATE'},
        {title: 'Country', field: 'BILLING_COUNTRY'},
        {title: 'Payment Timestamp', field: 'PAYMENT_TIME', type: 'datetime', editable: 'never'},
        {
            title: 'Status',
            field: 'STATUS',
            lookup: {"INITIATED": 'Initiated', "COMPLETED": 'Completed'},
            editable: 'never'
        },
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
        fetch('/api/payments', {
            method: 'POST',
            body: JSON.stringify({
                amount: data.AMOUNT,
                billingStreetAddress: data.BILLING_STR_ADD,
                billingCity: data.BILLING_CITY,
                billingState: data.BILLING_STATE,
                billingCountry: data.BILLING_COUNTRY,
                accountId: data.ACCOUNT_ID
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
        fetch(`/api/payments/${data.PAYMENT_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                amount: data.AMOUNT,
                billingStreetAddress: data.BILLING_STR_ADD,
                billingCity: data.BILLING_CITY,
                billingState: data.BILLING_STATE,
                billingCountry: data.BILLING_COUNTRY
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

    function confirmPayment(data) {
        fetch(`/api/payments/confirm/${data.PAYMENT_ID}`, {
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

    const actions = [
        {
            icon: 'check_circle_outline',
            tooltip: 'Confirm Payment',
            onClick: (event, rowData) => confirmPayment(rowData)
        }
    ];

    const components = {
        Action: props => {
            let disabled = false;
            if (props.action.tooltip === 'Confirm Payment')
                disabled = props.data.STATUS !== 'INITIATED';
            else if (props.action.tooltip === 'Add')
                disabled = false;
            else if (props.action.tooltip === 'Cancel')
                disabled = false;
            else if (props.action.tooltip === 'Save')
                disabled = false;
            else
                disabled = props.data.STATUS !== 'INITIATED';

            return <MTableAction {...props} disabled={disabled}/>;

        },
    };

    return (
        <div>
            {!payments || !usernames ? 'Loading...' :
                <TableWithSearch
                    title={'Payments'}
                    data={payments}
                    columns={paymentColumns()}
                    fetchCall={fetchData}
                    addCall={addCall}
                    updateCall={updateCall}
                    actions={actions}
                    components={components}
                    deletable={false}
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
                    </IconButton>
                ]}
            />}
        </div>
    )
}