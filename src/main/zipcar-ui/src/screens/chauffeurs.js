import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";


const chauffeurColumns = [
    { title: 'Employee ID', field: 'EMPLOYEE_ID', editable: 'never' },
    { title: 'First Name', field: 'FIRST_NAME' },
    { title: 'Last Name', field: 'LAST_NAME',  },
    { title: 'Expiry Date', field: 'EXPIRY_DATE', type: 'date' },
    { title: 'State', field: 'STATE',  },
    { title: 'DL Number', field: 'DL_NUMBER'}
];

export default function Chauffeurs () {
    const [chauffeurs, setChauffeurs] = useState(null);

    const fetchData = () => {
        fetch('/api/chauffeur/all')
            .then(results => results.json())
            .then(data => {
                setChauffeurs(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    function addCall (data)  {
        fetch('/api/chauffeur', {
            method: 'POST',
            body: JSON.stringify({
                employeeId: null,
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CH',
                dlNumber: data.DL_NUMBER,
                expiryDate: data.EXPIRY_DATE,
                issuingState: data.STATE
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }


    function updateCall (data)  {
        fetch(`/api/chauffeur/${data.EMPLOYEE_ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                type: 'CH',
                dlNumber: data.DL_NUMBER,
                expiryDate: data.EXPIRY_DATE,
                issuingState: data.STATE
            }),
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }

    function deleteCall (data)  {
        fetch(`/api/chauffeur/${data.EMPLOYEE_ID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }


    return(
        <div>
            { !chauffeurs ? 'Loading...' : <TableWithSearch
                title ={'Chauffeurs'}
                data={chauffeurs}
                columns={chauffeurColumns}
                addCall={addCall}
            updateCall={updateCall}
            deleteCall={deleteCall}/> }
        </div>
    )
}