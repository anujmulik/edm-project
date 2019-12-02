import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import DateTimePicker from "./datetimepicker";

export default function CarSelection({ onChange, setOpenDialog}) {
    const [cars, setCars] = useState(null);
    const [selectedRow, onSelect] = useState(null);
    const [tripCost, setTripCost] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

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

        const startTimeIns =  startTime.getFullYear() + "-" + (startTime.getMonth() + 1)
            + "-" + startTime.getDate() + " " + startTime.getHours() + ":" + startTime.getMinutes()
            + ":" + startTime.getSeconds();

        const endTimeIns =  endTime.getFullYear() + "-" + (endTime.getMonth() + 1)
            + "-" + endTime.getDate() + " " + endTime.getHours() + ":" + endTime.getMinutes()
            + ":" + endTime.getSeconds();


        fetch(`/api/bookings/cost?vin=${selectedRow.VIN}&start-time=${startTimeIns}&end-time=${endTimeIns}`)
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

    const [open, setOpen] = useState(false);

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
                                            handleDateChange={(date) => setStartTime(date)}/>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <DateTimePicker label={'Select End Time'} selectedDate={endTime}
                                            handleDateChange={(date) => setEndTime(date)}/>
                        </div>
                    </div>
                    <div style={{marginLeft: '20px'}}> Trip Cost: ${tripCost} </div>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0 20px 20px'}}>

                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" onClick={() => fetchCost()}
                                    disabled={!selectedRow || !endTime || !startTime}>
                                Fetch Cost
                            </Button>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" color="primary" onClick={() => {
                                onChange(selectedRow.VIN);
                                setOpenDialog(false);
                            }}
                                    disabled={!selectedRow}>
                                Confirm
                            </Button>
                        </div>
                        <Button variant="contained" color="secondary"  onClick={()=>setOpenDialog(false)}>
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