import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {MTableAction, MTableEditField} from "material-table";
import FormDialog from "../components/form-dialog";
import CarSelection from "../components/car-selection";


const bookingsColumns = [
    {title: 'Account ID', field: 'ACCOUNT_ID', editable: 'never'},
    {title: 'Booking ID', field: 'BOOKING_ID', editable: 'never'},
    {title: 'Chauffeur Pickup', field: 'CHAUFFER_PICKUP', editable: 'onAdd', lookup: {
        "Y": "Yes",
            "N": "No"
        }},
    {title: 'Pickup Location Latitude', field: 'PICKUP_LOC_LAT', editable: 'onAdd', type: 'numeric'},
    {title: 'Pickup Location Longitude', field: 'PICKUP_LOC_LONG', editable: 'onAdd', type: 'numeric'},
    {title: 'Drop off Location Latitude', field: 'DROP_LOC_LAT', editable: 'onAdd', type: 'numeric'},
    {title: 'Drop off Location Longitude', field: 'DROP_LOC_LONG', editable: 'onAdd', type: 'numeric'},
    {title: 'Booking Time', field: 'BOOKING_TIME', editable: 'onAdd', type: 'datetime'},
    {title: 'Status', field: 'STATUS', editable: 'never'},
    {title: 'Start Time', field: 'START_TIME', editable: 'onAdd', type: 'datetime'},
    {title: 'End Time', field: 'END_TIME', editable: 'onAdd', type: 'datetime'},
    {title: 'Final Fuel', field: 'FINAL_FUEL', type: 'numeric', editable: 'onUpdate'},
    {title: 'Total Distance Travelled', field: 'TOTAL_DISTANCE_TRAVELLED', type: 'numeric', editable: 'onUpdate'},
    {title: 'VIN', field: 'VIN', editable: 'onAdd'},
    {title: 'Promotion Code', field: 'PROMOCODE', editable: 'onAdd'},
    {title: 'Pickup Station ID', field: 'PICKUP_STATION_ID', editable: 'onAdd'},
    {title: 'Dropoff Station ID', field: 'DROPOFF_STATION_ID', editable: 'onAdd'},
    {title: 'Total Fines', field: 'TOTAL_FINES', editable: 'never'},
    {title: 'Actual End Time', field: 'ACTUAL_END_TIME', editable: 'onUpdate', type: 'datetime'},
    {title: 'Base Booking Amount', field: 'BASE_BOOKING_AMOUNT', editable: 'never'}
];

export default function Bookings() {

    const [bookings, setBookings] = useState(null);
    const [vin, setVin] = useState(null);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const actions = [
        {
            icon: 'block',
            tooltip: 'Cancel Booking',
            onClick: (event, rowData) => cancelBooking(rowData.BOOKING_ID)
        }, {
            icon: 'play_circle_outline',
            tooltip: 'Start Booking',
            onClick: (event, rowData) => startBooking(rowData.BOOKING_ID)
        },
        {
            icon: 'check_circle',
            tooltip: 'Finish Booking',
            onClick: (event, rowData) => {
                console.log('row data is ', rowData);
                endBooking(rowData.BOOKING_ID)
            }
        },
    ];


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

    const components = {
        EditField: props => {
            if (props.columnDef.field === 'VIN') {
                return <FormDialog title={'Select Car'} closeDialog={() => {
                    setVin(null);
                    setStartTime(null);
                    setEndTime(null)
                }
                }>
                    <CarSelection
                        endTime={endTime}
                        setEndTime={setEndTime}
                        startTime={startTime}
                        setStartTime={setStartTime}
                        setVin={setVin}
                    /></FormDialog>
            }
            return <MTableEditField {...props}/>;

        },

        Action: props => {
            let disabled = false;
            if (props.action.tooltip === 'Start Booking')
                disabled = props.data.STATUS !== 'INITIATED';
            else if (props.action.tooltip === 'Cancel Booking')
                disabled = props.data.STATUS !== 'INITIATED';
            else if (props.action.tooltip === 'Finish Booking')
                disabled = props.data.STATUS !== 'IN PROGRESS'
                    || !props.data.FINAL_FUEL
                    || !props.data.TOTAL_DISTANCE_TRAVELLED
                    || !props.data.ACTUAL_END_TIME;
            else if (props.action.tooltip === 'Add')
                disabled = false;
            else if (props.action.tooltip === 'Cancel')
                disabled = false;
            else if (props.action.tooltip === 'Save')
                disabled = false;
            else
                disabled = props.data.STATUS !== 'IN PROGRESS';


            return <MTableAction {...props} disabled={disabled}/>;

        },
    };

    function startBooking(bookingId) {
        fetch(`/api/bookings/start/${bookingId}`, {
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

    function cancelBooking(bookingId) {
        fetch(`/api/bookings/cancel/${bookingId}`, {
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

    function endBooking(bookingId) {
        fetch(`/api/bookings/end/${bookingId}`, {
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

    function addCall(data) {
        fetch(`/api/bookings/initiate`, {
            method: 'POST',
            body: JSON.stringify({
                dropLocationLat: data.DROP_LOC_LAT_INS,
                dropLocationLong: data.DROP_LOC_LONG_INS,
                pickupLocationLat: data.PICKUP_LOC_LAT_INS,
                pickupLocationLong: data.PICKUP_LOC_LONG_INS,
                bookingTime: data.BOOKING_TIME_INS,
                endTime: data.END_TIME_INS,
                accountId: data.ACCOUNT_ID_INS,
                vin: data.VIN_INS,
                promocode: data.PROMOCODE_INS,
                pickupStationId: data.PICKUP_STATION_ID_INS,
                dropoffStationId: data.DROPOFF_STATION_ID_INS,
                isChauffeurPickup: data.CHAUFFER_PICKUP_INS
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

    function updateBooking(data) {
        fetch(`/api/bookings/update/${data.BOOKING_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                fuel: data.FINAL_FUEL,
                totalDistanceTravelled: data.TOTAL_DISTANCE_TRAVELLED,
                actualEndTime: data.ACTUAL_END_TIME
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


    return (
        <div>
            {!bookings ? 'Loading...' : <TableWithSearch
                title={'Bookings'}
                data={bookings}
                columns={bookingsColumns}
                addCall={addCall}
                deletable={false}
                components={components}
                actions={actions}
                updateCall={updateBooking}
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
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />}
        </div>
    )
}