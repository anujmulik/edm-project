import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";

const refundColumns = [
    { title: 'Booking ID', field: 'BOOKING_ID', editable: 'onAdd'},
    { title: 'Amount', field: 'AMOUNT', type: 'numeric' },
    { title: 'Reason', field: 'REASON' },
    { title: 'Refund Timestamp', field: 'REFUND_TIMESTAMP', type: 'datetime'},
    {
        title: 'Status',
        field: 'STATUS',
        lookup: { "INITIATED": 'Initiated', "APPROVED": 'Approved', "DECLINED": 'Declined' },
        editable: 'never'
    },
];

export default function Refunds () {
    const [refunds, setRefunds] = useState(null);

    const fetchData = () => {
        fetch('/api/refunds/all')
            .then(results => results.json())
            .then(data => {
                setRefunds(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    function addCall (data)  {
        fetch('/api/refunds', {
            method: 'POST',
            body: {
                bookingId: data.BOOKING_ID,
                amount: data.AMOUNT,
                status: 'INITIATED',
                reason: data.REASON,
                refundTimestamp: data.REFUND_TIMESTAMP
            },
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }

    function updateCall (data)  {
        fetch(`/api/refunds/${data.BOOKING_ID}/${data.INSTANCE}`, {
            method: 'PUT',
            body: {
                bookingId: data.BOOKING_ID,
                amount: data.AMOUNT,
                status: 'INITIATED',
                reason: data.REASON,
                refundTimestamp: data.REFUND_TIMESTAMP
            },
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }

    function deleteCall (data)  {
        fetch(`/api/refunds/${data.BOOKING_ID}/${data.INSTANCE}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => fetchData());
    }

    return(
        <div>
        { !refunds ? 'Loading...' :
            <TableWithSearch
            title ={'Refunds'}
            data={refunds}
            columns={refundColumns}
            fetchCall={fetchData}
            addCall={addCall}
            updateCall={updateCall}
            deteleCall={deleteCall}
            /> }
        </div>
    )
}