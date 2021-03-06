import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {MTableAction} from "material-table";

export default function Refunds () {
    const [refunds, setRefunds] = useState(null);
    const [bookingIds, setBookingIds] = useState(null);

    const fetchData = () => {
        fetch('/api/refunds/all')
            .then(results => results.json())
            .then(data => {
                setRefunds(data);
            });

        fetch('/api/bookings/all')
            .then(results => results.json())
            .then(data => {
                setBookingIds(data.map (booking=> booking.BOOKING_ID));
            });
    };

    const getBookingIds = () => {
        let final = {};
        bookingIds.map(booking => (final[booking]=`${booking}`));
        return final;
    };

    const refundColumns = ()=> [
        { title: 'Booking ID', field: 'BOOKING_ID', editable: 'onAdd', lookup: getBookingIds()},
        { title: 'Amount', field: 'AMOUNT', type: 'currency' },
        { title: 'Reason', field: 'REASON' },
        { title: 'Refund Timestamp', field: 'REFUND_TIMESTAMP', type: 'datetime', editable: 'never'},
        {
            title: 'Status',
            field: 'STATUS',
            lookup: { "INITIATED": 'Initiated', "APPROVED": 'Approved', "DECLINED": 'Declined' },
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

    function addCall (data)  {
        fetch('/api/refunds', {
            method: 'POST',
            body: JSON.stringify({
                bookingId: data.BOOKING_ID,
                amount: data.AMOUNT,
                status: 'INITIATED',
                reason: data.REASON
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
        fetch(`/api/refunds/${data.BOOKING_ID}/${data.INSTANCE}`, {
            method: 'PUT',
            body: JSON.stringify({
                bookingId: data.BOOKING_ID,
                amount: data.AMOUNT,
                status: 'INITIATED',
                reason: data.REASON
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

    function declineRefund(data) {
        fetch(`/api/refunds/decline/${data.BOOKING_ID}/${data.INSTANCE}`, {
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

    function approveRefund(data) {
        fetch(`/api/refunds/approve/${data.BOOKING_ID}/${data.INSTANCE}`, {
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
            icon: 'block',
            tooltip: 'Reject Refund',
            onClick: (event, rowData) => declineRefund(rowData)
        }, {
            icon: 'check_circle_outline',
            tooltip: 'Approve Refund',
            onClick: (event, rowData) => approveRefund(rowData)
        }
    ];

    function deleteCall(data) {
        fetch(`/api/refunds/${data.BOOKING_ID}/${data.INSTANCE}`, {
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

    const components = {
        Action: props => {
            let disabled = false;
            if (props.action.tooltip === 'Reject Refund')
                disabled = props.data.STATUS !== 'INITIATED';
            else if (props.action.tooltip === 'Approve Refund')
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
            {!refunds || !bookingIds ? 'Loading...' :
                <TableWithSearch
                    title={'Refunds'}
                    data={refunds}
                    columns={refundColumns()}
                    fetchCall={fetchData}
                    addCall={addCall}
                    updateCall={updateCall}
                    deleteCall={deleteCall}
                    actions={actions}
                    components={components}
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
                    </IconButton>
                ]}
            />}
        </div>
    )
}