import React, {useEffect, useState} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Invoice({setOpenDialog, booking}) {
    const [fines, setFines] = useState(null);

    const fetchData = () => {

        fetch(`/api/fines-by-booking?booking-id=${bookingId}`)
            .then(handleErrors)
            .then(results => results.json())
            .then(data => {
                setFines(data);
            }).catch((error) => {
            setOpen(true);
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

    return (
        <div>
            {!booking ? 'Loading...' :
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    'align-items': 'flex-start',
                    marginLeft: 20,
                    marginTop: 20
                }}>
                    {fines}
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