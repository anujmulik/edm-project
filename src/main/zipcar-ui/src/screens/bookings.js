import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';


const bookingsColumns = [
    { title: 'Account ID', field: 'ACCOUNT_ID'},
    { title: 'Booking ID', field: 'BOOKING_ID', editable: 'never' },
    { title: 'Chauffeur Pickup', field: 'CHAUFFER_PICKUP'},
    { title: 'Pickup Location Latitude', field: 'PICKUP_LOC_LAT'},
    { title: 'Pickup Location Longitude', field: 'PICKUP_LOC_LONG'},
    { title: 'Drop off Location Latitude', field: 'DROP_LOC_LAT' },
    { title: 'Drop off Location Longitude', field: 'DROP_LOC_LONG'},
    { title: 'Booking Time', field: 'BOOKING_TIME'},
    { title: 'Status', field: 'STATUS'},
    { title: 'Start Time', field: 'START_TIME' },
    { title: 'End Time', field: 'END_TIME'},
    { title: 'Final Fuel', field: 'FINAL_FUEL'},
    { title: 'Total Distance Travelled', field: 'TOTAL_DISTANCE_TRAVELLED'},
    { title: 'VIN', field: 'VIN'},
    { title: 'Promotion Code', field: 'PROMOCODE'},
    { title: 'Pickup Station ID', field: 'PICKUP_STATION_ID'},
    { title: 'Dropoff Station ID', field: 'DROPOFF_STATION_ID' },
    { title: 'Total Fines', field: 'TOTAL_FINES'},
    { title: 'Actual End Time', field: 'ACTUAL_END_TIME'},
    { title: 'Base Booking Amount', field: 'BASE_BOOKING_AMOUNT'}
];

export default function Bookings () {

    const [bookings, setBookings] = useState(null);


    const fetchData = () => {
        fetch('/api/bookings/all')
            .then(results => results.json())
            .then(data => {
                setBookings(data);
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


    function addCall (data)  {
        fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({

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
        fetch(`/api/bookings/${data.BOOKING_ID}`, {
            method: 'PUT',
            body: JSON.stringify({

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

    return(
        <div>
            { !bookings ? 'Loading...' : <TableWithSearch
                title ={'Bookings'}
                data={bookings}
                columns={bookingsColumns}
                addCall={addCall}
                updateCall={updateCall}
                deletable={false}
                //components={components}
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