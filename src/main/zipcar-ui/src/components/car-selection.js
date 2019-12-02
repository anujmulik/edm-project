import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import DateTimePicker from "./datetimepicker";

export default function CarSelection({ setVin, setStartTime, setEndTime, startTime, endTime}) {
    const [cars, setCars] = useState(null);
    const [selectedRow, onSelect] = useState(null);
    const [tripCost, setTripCost] = useState(0);

    const fetchData = () => {
        fetch('/api/cars/all')
            .then(handleErrors)
            .then(results => results.json())
            .then(data => {
                setCars(data);
            }).catch((error) => {
            setOpen(true);
        });

    };

    const fetchCost = () => {
        fetch(`/api/bookings/cost?vin=${selectedRow.VIN}&start-time=${startTime}&end-time=${endTime}`)
            .then(handleErrors)
            .then(results => results.json())
            .then(data => {
                setTripCost(data);
            }).catch((error) => {
            setOpen(true);
        });
    };

    const carColumns = [
        {title: 'VIN', field: 'VIN', editable: 'never'},
        {title: 'Number of Seats', field: 'NO_OF_SEATS', type: 'numeric'},
        {title: 'Year', field: 'YEAR', type: 'numeric'},
        {title: 'Type', field: 'TYPE'},
        {title: 'Model', field: 'MODEL'},
        {title: 'Segment', field: 'SEGMENT'},
        {title: 'Color', field: 'COLOR'},
        {title: 'Make', field: 'MAKE'},
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

    return (
        <div>
            {!cars ? 'Loading...' :
                <div style={{display: 'flex', flexDirection: 'column', 'align-items': 'flex-start'}}>
                    <TableWithSearch
                        title={'Car List'}
                        data={cars}
                        columns={carColumns}
                        onSelect={onSelect}
                        editable={false}
                        pageSize={5}
                    />
                    <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0 20px 20px'}}>
                        <div style={{marginRight: '20px'}}>
                            <DateTimePicker label={'Select Start Time'} selectedDate={startTime}
                                            handleDateChange={(date) =>
                                            {
                                                const startTime =  date.getFullYear() + "-" + (date.getMonth() + 1)
                                                    + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
                                                    + ":" + date.getSeconds();

                                                setStartTime(startTime);
                                            }}/>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <DateTimePicker label={'Select End Time'} selectedDate={endTime}
                                            handleDateChange={(date) => {
                                                const endTime =  date.getFullYear() + "-" + (date.getMonth() + 1)
                                                    + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
                                                    + ":" + date.getSeconds();

                                                setEndTime(endTime);
                                            }}/>
                        </div>
                    </div>
                    <div style={{marginLeft: '20px'}}> Trip Cost: ${tripCost} </div>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0 20px 20px'}}>

                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" onClick={() => fetchCost()} disabled={!selectedRow}>
                                Fetch Cost
                            </Button>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" color="primary" onClick={() => setVin(selectedRow.VIN)}
                                    disabled={!selectedRow}>
                                Confirm
                            </Button>
                        </div>
                        <Button variant="contained" color="secondary" onClick={() => {
                            setVin();
                            setStartTime(null);
                            setEndTime(null);
                        }}>
                            Cancel
                        </Button>
                    </div>


                </div>


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