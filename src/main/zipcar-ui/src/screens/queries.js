import React, {useEffect, useState} from 'react';
import TableWithSearch from "../components/table-with-search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SyntaxHighliter from "../components/syntax-hilighter";
import {query1Text} from "../queries/query1";
import {query2Text} from "../queries/query2";
import {query12Text} from "../queries/query12";
import {query11Text} from "../queries/query11";
import {query10Text} from "../queries/query10";
import {query9Text} from "../queries/query9";
import {query8Text} from "../queries/query8";
import {query7Text} from "../queries/query7";
import {query6Text} from "../queries/query6";
import {query5Text} from "../queries/query5";
import {query4Text} from "../queries/query4";
import {query3Text} from "../queries/query3";

export default function Queries({value}) {
    const [query1, setQuery1] = useState(null);
    const [query2, setQuery2] = useState(null);
    const [query3, setQuery3] = useState(null);
    const [query4, setQuery4] = useState(null);
    const [query5, setQuery5] = useState(null);
    const [query6, setQuery6] = useState(null);
    const [query7, setQuery7] = useState(null);
    const [query8, setQuery8] = useState(null);
    const [query9, setQuery9] = useState(null);
    const [query10, setQuery10] = useState(null);
    const [query11, setQuery11] = useState(null);
    const [query12, setQuery12] = useState(null);

    const fetchData = () => {
        if (value === 6) {
            fetch('/api/query1')
                .then(results => results.json())
                .then(data => {
                    setQuery1(data);
                });

            fetch('/api/query2')
                .then(results => results.json())
                .then(data => {
                    setQuery2(data);
                });
            fetch('/api/query3')
                .then(results => results.json())
                .then(data => {
                    setQuery3(data);
                });

            fetch('/api/query4')
                .then(results => results.json())
                .then(data => {
                    setQuery4(data);
                });

            fetch('/api/query5')
                .then(results => results.json())
                .then(data => {
                    setQuery5(data);
                });

            fetch('/api/query6')
                .then(results => results.json())
                .then(data => {
                    setQuery6(data);
                });

            fetch('/api/query7')
                .then(results => results.json())
                .then(data => {
                    setQuery7(data);
                });

            fetch('/api/query8')
                .then(results => results.json())
                .then(data => {
                    setQuery8(data);
                });

            fetch('/api/query9')
                .then(results => results.json())
                .then(data => {
                    setQuery9(data);
                });

            fetch('/api/query10')
                .then(results => results.json())
                .then(data => {
                    setQuery10(data);
                });

            fetch('/api/query11')
                .then(results => results.json())
                .then(data => {
                    setQuery11(data);
                });

            fetch('/api/query12')
                .then(results => results.json())
                .then(data => {
                    setQuery12(data);
                });
        }
    };

    const query1Columns = [
        {title: 'Period', field: 'PERIOD'},
        {title: 'Number of Bookings', field: 'NO_OF_BOOKINGS', type: 'numeric'},
        {title: 'Last Year\'s Bookings', field: 'LAST_YEAR_BOOKINGS', type: 'numeric'},
        {title: 'Last Month\'s Bookings', field: 'LAST_MONTH_BOOKINGS', type: 'numeric'},
        {title: 'Next Month\'s Bookings', field: 'NEXT_MONTH_BOOKINGS', type: 'numeric'},
        {title: 'Annual Change', field: 'ANNUAL_CHANGE', type: 'numeric'},
        {title: 'Monthly Change', field: 'MONTHLY_CHANGE', type: 'numeric'},
        {title: 'YTD Bookings', field: 'YTD_BOOKINGS', type: 'numeric'},
    ];

    const query2Columns = [
        {title: 'Employee_ID', field: 'EMPLOYEE_ID'},
        {title: 'Number of Tickets', field: 'NO_OF_TICKETS', type: 'numeric'},
        {title: 'Number of Tickets under Manager', field: 'NUM_OF_TICKETS_UNDER_MANAGER', type: 'numeric'},
        {title: 'Current Status', field: 'CURRENT_STATUS'},
        {title: 'Severity', field: 'SEVERITY'}
    ];

    const query3Columns = [
        {title: 'Segment', field: 'SEGMENT'},
        {title: 'Cars in Segment', field: 'CARS_IN_SEGMENT', type: 'numeric'},
        {title: 'Models in Segment', field: 'MODELS_IN_SEGMENT', type: 'numeric'},
        {title: 'Type in Segment', field: 'TYPE_IN_SEGMENT', type: 'numeric'},
        {title: 'Total Revenue', field: 'TOTAL_REVENUE', type: 'numeric'},
        {title: 'Number of Regions ', field: 'NUMBER_OF_REGIONS', type: 'numeric'},
        {title: 'Max Bookings in Month', field: 'MAX_BOOKINGS_IN_MONTH', type: 'numeric'},
        {title: 'Number of Times Serviced', field: 'NUM_TIMES_SERVICED', type: 'numeric'},
    ];

    const query4Columns = [
        {title: 'First Name', field: 'FIRST_NAME'},
        {title: 'Last Name', field: 'LAST_NAME'},
        {title: 'Customer ID', field: 'CUSTOMER_ID'},
        {title: 'Total Number of Bookings', field: 'TOTAL_NUM_BOOKINGS', type: 'numeric'},
        {title: 'Segment', field: 'SEGMENT'},
        {title: 'Total Distance Travelled', field: 'TOTAL_DISTANCE_TRAVELLED', type: 'numeric'},
        {title: 'Total Fines', field: 'TOTAL_FINES', type: 'numeric'},
        {title: 'Customer Type', field: 'CUSTOMER_TYPE'},
    ];

    const query5Columns = [
        {title: 'State', field: 'STATES'},
        {title: 'Number of Regions', field: 'NUM_OF_REGIONS', type: 'numeric'},
        {title: 'Number of Chauffeurs', field: 'NUM_OF_CHAUFFERS', type: 'numeric'},
        {title: 'Number of Cars', field: 'NUM_OF_CARS', type: 'numeric'},
        {title: 'Number of Car Stations', field: 'NUM_CAR_STATIONS', type: 'numeric'},
        {title: 'Number of Service Centers', field: 'NUM_OF_SERVICE_CENTERS', type: 'numeric'},
        {title: 'Number of Customers', field: 'NUM_OF_CUSTOMERS', type: 'numeric'}
    ];

    const query6Columns = [
        {title: 'State', field: 'STATE'},
        {title: 'Most Popular Segment', field: 'MOST_POPULAR_SEGMENT'},
    ];

    const query7Columns = [
        {title: 'Account ID', field: 'ACCOUNT_ID'},
        {title: 'Total Base Booking Amount', field: 'TOTAL_BASE_BOOKING_AMOUNT', type: 'numeric'},
        {title: 'Total Plan Discount', field: 'TOTAL_PLAN_DISCOUNT', type: 'numeric'},
        {title: 'Total Promotion Discount', field: 'TOTAL_PROMOCODE_DISCOUNT', type: 'numeric'},
        {title: 'Total Savings', field: 'TOTAL_SAVINGS', type: 'numeric'},
    ];

    const query8Columns = [
        {title: 'Segment', field: 'SEGMENT'},
        {title: 'Average Booking Price', field: 'AVERAGE_BOOKING_PRICE', type: 'numeric'},
        {title: 'Average Labor Cost', field: 'AVERAGE_LABOUR_COST', type: 'numeric'},
        {title: 'Average Equipment Cost', field: 'AVERAGE_EQUIPMENT_COST', type: 'numeric'},
        {title: 'Average Service Cost', field: 'AVERAGE_SERVICE_COST', type: 'numeric'},
        {title: 'Percentage Labor Cost', field: 'PERCENTAGE_LABOUR_COST', type: 'numeric'},
        {title: 'Percentage Equipment Cost', field: 'PERCENTAGE_EQUIPMENT_COST', type: 'numeric'},
        {title: 'Rate of Return', field: 'RATE_OF_RETURN', type: 'numeric'}
    ];

    const query9Columns = [
        {title: 'State', field: 'STATE'},
        {title: 'Category', field: 'CATEGORY'},
        {title: 'Number of Bookings', field: 'NO_OF_BOOKINGS', type: 'numeric'},
        {title: 'Total Fines', field: 'TOTAL_FINES', type: 'numeric'}
    ];

    const query10Columns = [
        {title: 'Customer ID', field: 'CUSTOMER_ID'},
        {title: 'First Name', field: 'FIRST_NAME'},
        {title: 'Last Name', field: 'LAST_NAME'},
        {title: 'Chauffeur Pickups', field: 'CHAUFFUER_PICKUP_COUNT', type: 'numeric'},
        {title: 'Tickets Raised', field: 'TICKETS_RAISED_COUNT', type: 'numeric'},
        {title: 'Critical Tickets', field: 'CRITICAL_TICKETS', type: 'numeric'},
        {title: 'Major Tickets', field: 'MAJOR_TICKETS', type: 'numeric'},
        {title: 'Minor Tickets', field: 'MINOR_TICKETS', type: 'numeric'}
    ];

    const query11Columns = [
        {title: 'Ticket Number', field: 'TICKET_NUMBER'},
        {title: 'SLA', field: 'SLA', type: 'numeric'},
        {title: 'Resolution Time', field: 'RESOLUTION_TIME', type: 'numeric'},
        {title: 'Difference', field: 'DIFFERENCE', type: 'numeric'},
        {title: 'Resolution Status', field: 'RESOLUTION_STATUS'},
        {title: 'Is Reassigned', field: 'ISREASSIGNED'},
        {title: 'Is Escalated', field: 'ISESCALATED'}
    ];
    const query12Columns = [
        {title: 'Issue Type ID', field: 'ISSUE_TYPE_ID'},
        {title: 'No of People Who Can Resolve Issue Type', field: 'NO_PEOPLE_WHO_CAN_RESOLVE', type: 'numeric'},
        {title: 'Employee IDs', field: 'EMPLOYEE_ID'},
        {title: 'Employee Names', field: 'EMPLOYEE_NAMES'},
        {title: 'Number of Issues Resolved', field: 'NUM_RESOLVED', type: 'numeric'}
    ];

    useEffect(() => {
        fetchData();
    }, [value]);

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
            {
                !query1 || !query2 || !query3 || !query4 || !query5 || !query6 ||
                !query7 || !query8 || !query9 || !query10 || !query11 || !query12
                    ? 'Loading...' :
                    <div>

                        <SyntaxHighliter title={'Query Description 1'} codeString={query1Text}/>

                        <TableWithSearch
                            title={'Query1'}
                            data={query1}
                            columns={query1Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 2'} codeString={query2Text}/>
                        < TableWithSearch
                            title={'Query2'}
                            data={query2}
                            columns={query2Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 3'} codeString={query3Text}/>
                        <TableWithSearch
                            title={'Query3'}
                            data={query3}
                            columns={query3Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 4'} codeString={query4Text}/>
                        <TableWithSearch
                            title={'Query4'}
                            data={query4}
                            columns={query4Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 5'} codeString={query5Text}/>
                        <TableWithSearch
                            title={'Query5'}
                            data={query5}
                            columns={query5Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 6'} codeString={query6Text}/>
                        <TableWithSearch
                            title={'Query6'}
                            data={query6}
                            columns={query6Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 7'} codeString={query7Text}/>
                        <TableWithSearch
                            title={'Query7'}
                            data={query7}
                            columns={query7Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 8'} codeString={query8Text}/>
                        <TableWithSearch
                            title={'Query8'}
                            data={query8}
                            columns={query8Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 9'} codeString={query9Text}/>
                        <TableWithSearch
                            title={'Query9'}
                            data={query9}
                            columns={query9Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 10'} codeString={query10Text}/>
                        <TableWithSearch
                            title={'Query10'}
                            data={query10}
                            columns={query10Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 11'} codeString={query11Text}/>
                        <TableWithSearch
                            title={'Query11'}
                            data={query11}
                            columns={query11Columns}
                            editable={false}
                        />
                        <br/>
                        <SyntaxHighliter title={'Query Description 12'} codeString={query12Text}/>
                        <TableWithSearch
                            title={'Query12'}
                            data={query12}
                            columns={query12Columns}
                            editable={false}
                        />
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