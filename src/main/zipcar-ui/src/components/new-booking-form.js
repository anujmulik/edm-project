import React, {useState} from "react";
import {FormControl} from '@material-ui/core';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import AutoSelect from "./autoselect";
import DatePicker from "./datepicker";
import TimePicker from "./timepicker";
import TableWithSearch from "./table-with-search";


export default function NewBookingForm () {

    const [state, setState] = useState({
        isChauffeurPickup: false
    });

    const handleSwitchChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const placeholderText = ['Enter Zip Code for Pickup Station','Enter Zip Code for Dropoff Station'];

    const zipCodes = [
        { label: '85719' },
        { label: '85121' },
        { label: '88621' },
    ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
    }));

    const carColumns = [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ];
    const carData = [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ];


    return(
        <FormControl>
                <FormControlLabel
                    control={<Switch checked={state.isChauffeurPickup} onChange={handleSwitchChange('isChauffeurPickup')} value="isChauffeurPickup" />}
                    label="Is Chauffeur Pickup?"
                    labelPlacement="start"
                />

           <AutoSelect suggestions={zipCodes} placeholder={placeholderText[0]} />
            <AutoSelect suggestions={zipCodes} placeholder={placeholderText[1]} />
            <DatePicker label={'Select Start Date'}/>
            <TimePicker label={'Select Start Time'}/>
            <DatePicker label={'Select End Date'}/>
            <TimePicker label={'Select End Time'}/>
            <TableWithSearch columns={carColumns} data={carData} title={'Select Car:'}/>
        </FormControl>
    )
}