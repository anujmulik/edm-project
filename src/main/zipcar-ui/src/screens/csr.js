import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import {MTableEditField} from "material-table";
import _ from 'lodash';

const csrColumns = [
    { title: 'Employee ID', field: 'EMPLOYEE_ID', editable: 'never' },
    { title: 'First Name', field: 'FIRST_NAME' },
    { title: 'Last Name', field: 'LAST_NAME'},
    { title: 'Escalation Contact', field: 'ESCALATION_CONTACT_NAME'},
    { title: 'Shift Details', field: 'SHIFT_DETAILS'},
    { title: 'Email ID', field: 'EMAIL_ID'}
];

export default function CSR () {

    const [csr, setCsr] = useState(null);

    const getCSRExceptSelected = (rowData) => {

        let final = {};
        csr.map(emp => (final[emp.EMPLOYEE_ID]=`${emp.FIRST_NAME} ${emp.LAST_NAME}`));

        if (!_.isEmpty(rowData))
            delete final[rowData.EMPLOYEE_ID];

        return final;

    };

    const components = {
        EditField: props => {
            console.log(JSON.stringify(props));
            if (props.columnDef.field != 'ESCALATION_CONTACT_NAME') {
                return <MTableEditField {...props}/>;
            }
            else {
                _.update(props, 'columnDef.lookup', () => getCSRExceptSelected(props.rowData));
                console.log('new props is ', JSON.stringify(props));
                return (
                        <MTableEditField {...props}/>
                );
            }

        },
    };


    const fetchData = () => {
        fetch('/api/csr/all')
            .then(results => results.json())
            .then(data => {
                setCsr(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    function addCall (data)  {
        fetch('/api/csr', {
            method: 'POST',
            body: JSON.stringify({
                employeeId: null,
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CSR',
                escalationContact: data.ESCALATION_CONTACT,
                emailId: data.EMAIL_ID,
                shiftDetails: data.SHIFT_DETAILS
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }


    function updateCall (data)  {
        fetch(`/api/csr/${data.EMPLOYEE_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CSR',
                escalationContact: data.ESCALATION_CONTACT,
                emailId: data.EMAIL_ID,
                shiftDetails: data.SHIFT_DETAILS
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }

    function deleteCall (data)  {
        fetch(`/api/csr/${data.EMPLOYEE_ID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }


    return(
        <div>
            { !csr ? 'Loading...' : <TableWithSearch
                title ={'Customer Service Representatives'}
                data={csr}
                columns={csrColumns}
                addCall={addCall}
                updateCall={updateCall}
                deleteCall={deleteCall}
                components={components}
            />

            }
        </div>
    )
}