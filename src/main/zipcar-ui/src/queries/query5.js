export const query5Text = `/*
 For each state in US find number of cars in them , number of chauffeurs , number of customers ,
 number of car stations, number of service centers, number of regions
*/

select ss.STATE_CODE as STATES
     ,count(distinct r.region_id) as NUM_OF_REGIONS
     ,count(distinct c.EMPLOYEE_ID) as NUM_OF_CHAUFFERS
     ,count(distinct cr.vin) as NUM_OF_CARS
     ,count(distinct cs.STATION_ID) as NUM_CAR_STATIONS
     ,count(distinct CENTRE_ID) as NUM_OF_SERVICE_CENTERS
     ,count(distinct cust.customer_id) as NUM_OF_CUSTOMERS
from states ss left outer join REGIONS r on ss.state_code=r.state
               left outer join CHAUFFER c on c.state=ss.STATE_code
               left outer join cars cr on cr.REGION_ID= r.REGION_ID
               left outer join CAR_STATIONS cs on cs.REGION_ID= r.REGION_ID
               left outer join SERVICE_CENTRES sc on sc.state=ss.STATE_code
               left outer join CUSTOMERS cust on cust.state=ss.STATE_code
group by ss.STATE_CODE;`;