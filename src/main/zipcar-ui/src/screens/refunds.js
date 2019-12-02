import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
        { title: 'Amount', field: 'AMOUNT', type: 'numeric' },
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

    function deleteCall (data)  {
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

    return(
        <div>
        { !refunds || !bookingIds ? 'Loading...' :
            <TableWithSearch
            title ={'Refunds'}
            data={refunds}
            columns={refundColumns()}
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
                    </IconButton>
                ]}
            />}
        </div>
    )
}