import React from "react";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function MyDateTimePicker({selectedDate, handleDateChange, label}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                label={label}
                inputVariant="outlined"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}

export default MyDateTimePicker;