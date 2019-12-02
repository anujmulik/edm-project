import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function CarStationSelection({ onChange, setOpenDialog}) {
    const [carStations, setCarStations] = useState(null);
    const [selectedRow, onSelect] = useState(null);

    const fetchData = () => {
        fetch('/api/car-stations/all')
            .then(handleErrors)
            .then(results => results.json())
            .then(data => {
                setCarStations(data);
            }).catch((error) => {
            setOpen(true);
        });

    };

    const carStationsColumns = [
        {title: 'Station ID', field: 'STATION_ID'},
        {title: 'Street Address', field: 'STREET_ADDRESS'},
        {title: 'Region ID', field: 'REGION_ID'},
        {title: 'Zipcode', field: 'ZIPCODE'}
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
            {!carStations ? 'Loading...' :
                <div style={{display: 'flex', flexDirection: 'column', 'align-items': 'flex-start'}}>
                    <TableWithSearch
                        title={'Car Station List'}
                        data={carStations}
                        columns={carStationsColumns}
                        onSelect={onSelect}
                        editable={false}
                        pageSize={5}
                    />


                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" color="primary" onClick={() => {
                                onChange(selectedRow.STATION_ID);
                                setOpenDialog(false);
                            }}
                                    disabled={!selectedRow}>
                                Select Car Station
                            </Button>
                        </div>
                        <Button variant="contained" color="secondary"
                        onClick={()=>setOpenDialog(false)}>
                            Cancel
                        </Button>
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