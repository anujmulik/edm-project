import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import NewBookingForm from "../components/new-booking-form";


export default function Bookings () {

    const [newBooking, setNewBooking] = useState(false);

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Button color={'primary'} variant={'contained'} onClick={()=> setNewBooking(true)} >Create New Booking </Button>
            {newBooking && <NewBookingForm/>}
        </div>
    )
}