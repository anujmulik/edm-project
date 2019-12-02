import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {MTableAction, MTableEditField} from "material-table";
import FormDialog from "../components/form-dialog";
import CarSelection from "../components/car-selection";
import _ from "lodash";
import PromotionsSelection from "../components/promocode-selection";
import CarStationSelection from "../components/car-station-selection";


const convertDateToTimestamp = (date) => {return date;};

export default function Bookings() {

    const [bookings, setBookings] = useState(null);
    const [usernames, setUsernames] = useState();

    const getUsernames = () => {
        let final = {};
        usernames.map(username => (final[username.accountId]=`${username.username}`));
        return final;
    };



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

        fetch('/api/accounts/all')
            .then(results => results.json())
            .then(data => {
                const names = data.map(user => ({username :user.USERNAME, accountId: user.ACCOUNT_ID}));
                setUsernames(names);
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

    const bookingsColumns = () => [
        {title: 'Account ID', field: 'ACCOUNT_ID', editable: 'onAdd' },
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

    const components = {
        EditField: props => {
            if (props.columnDef.field === 'VIN' && _.isEmpty(props.value)) {
                return <FormDialog title={'Select Car'}>
                    <CarSelection
                        onChange={props.onChange}
                    /></FormDialog>
            }

            if (props.columnDef.field === 'PROMOCODE' && _.isEmpty(props.value)) {
                return <FormDialog title={'Select Promotion'}>
                    <PromotionsSelection
                        onChange={props.onChange}
                    /></FormDialog>
            }


            if (props.columnDef.field === 'PICKUP_STATION_ID' && _.isEmpty(props.value)) {
                return <FormDialog title={'Select Pickup Station'} >
                    <CarStationSelection
                        onChange={props.onChange}
                    /></FormDialog>
            }

            if (props.columnDef.field === 'DROPOFF_STATION_ID' && _.isEmpty(props.value)) {
                return <FormDialog title={'Select Dropoff Station'} >
                    <CarStationSelection
                        onChange={props.onChange}
                    /></FormDialog>
            }

            if (props.columnDef.field === 'ACCOUNT_ID')
                _.update(props, 'columnDef.lookup', () => getUsernames());

            if ((props.columnDef.field === 'PICKUP_LOC_LAT' || props.columnDef.field === 'PICKUP_LOC_LONG'
            || props.columnDef.field === 'DROP_LOC_LAT' || props.columnDef.field === 'DROP_LOC_LONG') &&
                props.rowData.CHAUFFER_PICKUP === 'N')
                return <MTableEditField {...props} disabled={true}/>;


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
        console.log(data);
        fetch(`/api/bookings/initiate`, {
            method: 'POST',
            body: JSON.stringify({
                dropLocationLat: data.DROP_LOC_LAT,
                dropLocationLong: data.DROP_LOC_LONG,
                pickupLocationLat: data.PICKUP_LOC_LAT,
                pickupLocationLong: data.PICKUP_LOC_LONG,
                bookingTime: convertDateToTimestamp(data.BOOKING_TIME),
                endTime: convertDateToTimestamp(data.END_TIME),
                accountId: data.ACCOUNT_ID,
                vin: data.VIN,
                promocode: data.PROMOCODE,
                pickupStationId: data.PICKUP_STATION_ID,
                dropoffStationId: data.DROPOFF_STATION_ID,
                isChauffeurPickup: data.CHAUFFER_PICKUP,
                startTime: convertDateToTimestamp(data.START_TIME)
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
            {!bookings || !usernames ? 'Loading...' : <TableWithSearch
                title={'Bookings'}
                data={bookings}
                columns={bookingsColumns()}
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