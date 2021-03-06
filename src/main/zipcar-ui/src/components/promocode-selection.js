import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function PromotionsSelection({onChange, setOpenDialog}) {
    const [promotions, setPromotions] = useState(null);
    const [selectedRow, onSelect] = useState(null);

    const fetchData = () => {
        fetch('/api/promotions/all')
            .then(handleErrors)
            .then(results => results.json())
            .then(data => {
                setPromotions(data);
            }).catch((error) => {
            setOpen(true);
        });

    };

    const promotionsColumns = [
        {title: 'Promotion Code', field: 'PROMOCODE'},
        {title: 'Discount Value', field: 'DISCOUNT_VALUE', type: 'numeric'},
        {title: 'Effective From', field: 'EFFECTIVE_FROM', type: 'date'},
        {title: 'Expiry Date', field: 'EXPIRY_DATE', type: 'date'},
        {title: 'Discount Type', field: 'DISCOUNT_TYPE'}
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
            {!promotions ? 'Loading...' :
                <div style={{display: 'flex', flexDirection: 'column', 'align-items': 'flex-start', marginLeft: 20, marginTop: 20}}>
                    <TableWithSearch
                        title={'Promotions List'}
                        data={promotions}
                        columns={promotionsColumns}
                        onSelect={onSelect}
                        editable={false}
                        pageSize={5}
                    />


                    <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                        <div style={{marginRight: '20px'}}>
                            <Button variant="contained" color="primary" onClick={() => {
                                onChange(selectedRow.PROMOCODE);
                                setOpenDialog(false);
                            }}
                                    disabled={!selectedRow}>
                                Select Promotion
                            </Button>
                        </div>
                        <Button variant="contained" color="secondary"
                                onClick={() => setOpenDialog(false)}>
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