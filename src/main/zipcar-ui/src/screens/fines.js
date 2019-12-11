import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Fines() {
    const [fines, setFines] = useState(null);
    const [bookingIds, setBookingIds] = useState(null);

    const fetchData = () => {
        fetch('/api/fines/all')
            .then(results => results.json())
            .then(data => {
                setFines(data);
            });
        fetch('/api/bookings/all')
            .then(results => results.json())
            .then(data => {
                setBookingIds(data.map(booking => booking.BOOKING_ID));
            });
    };

    const finesColumns = () => [
        {title: 'Booking ID', field: 'BOOKING_ID', editable: 'onAdd', lookup: getBookingIds()},
        {
            title: 'Category', field: 'CATEGORY', lookup: {
                'CAR DAMAGES': 'Car Damages',
                'LOW GAS': 'Low Gas',
                'IGNITION KEY REPLACEMENT': 'Ignition Key Replacement',
                'TICKETS/VIOLATION PROCESSING': 'Tickets/Violation Processing',
                'LATE RETURN': 'Late Return',
                'BOOKING CANCELLATION': 'Booking Cancellation',
                'OTHER VIOLATIONS': 'Other Violations'
            }
        },
        {title: 'Price', field: 'PRICE', type: 'currency'},
        {title: 'Description', field: 'DESCRIPTION'},

    ];

    const getBookingIds = () => {
        let final = {};
        bookingIds.map(booking => (final[booking] = `${booking}`));
        return final;
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

    function addCall(data) {
        fetch('/api/fines', {
            method: 'POST',
            body: JSON.stringify({
                bookingId: data.BOOKING_ID,
                category: data.CATEGORY,
                price: data.PRICE,
                description: data.DESCRIPTION
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
        fetch(`/api/fines/${data.BOOKING_ID}/${data.INSTANCE}`, {
            method: 'PUT',
            body: JSON.stringify({
                bookingId: data.BOOKING_ID,
                category: data.CATEGORY,
                price: data.PRICE,
                description: data.DESCRIPTION,
                instance: data.INSTANCE
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

    function deleteCall(data) {
        fetch(`/api/fines/${data.BOOKING_ID}/${data.INSTANCE}`, {
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

    return (
        <div>
            {!fines || !bookingIds ? 'Loading...' :
                <TableWithSearch
                    title={'Fines'}
                    data={fines}
                    columns={finesColumns()}
                    addCall={addCall}
                    updateCall={updateCall}
                    deleteCall={deleteCall}
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