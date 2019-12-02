export const query4Text = `
/*
 For each customer show their name , their number of bookings , total booking amount 
 paid by them, total miles travelled, total fines paid display categories based
 number of bookings done, gold_customer if num_bookings >15, silver_customer if 
 num_bookings>10 and bronze_customer if num_bookings>2 , regular customer if 
 num_bookings is between 0 and 3, if num_bookings = 0 then display it as 
 New_customer, for each customer also show each car segment is booked
 how many times
*/

with segment_count as(

    select C.SEGMENT , count(b.booking_id) as NUM_SEGMENT_BOOKED, a.CUSTOMER_ID as cust_id from bookings b join cars c on
            c.vin=b.vin join accounts a on a.ACCOUNT_ID=b.ACCOUNT_ID join
                                                                                                CUSTOMERS cs on cs.CUSTOMER_ID= a.CUSTOMER_ID
    group by c.segment,  a.CUSTOMER_ID
)
select first_name, last_name , c.CUSTOMER_ID , count(b.booking_id) as TOTAL_NUM_BOOKINGS,cr.segment,
       sum(b.TOTAL_DISTANCE_TRAVELLED), sum(TOTAL_FINES), sc.NUM_SEGMENT_BOOKED as NUM_SEGMENT_BOOKED ,
       (case
            when count(b.booking_id) > 15 then 'GOLD CUSTOMER'
            when count(b.booking_id) > 10 then 'SILVER CUSTOMER'
            when count(b.booking_id) > 2 then 'BRONZE CUSTOMER'
            when count(b.booking_id) <= 2 and count(b.booking_id) >0  then 'REGULAR CUSTOMER'
            when count(b.booking_id)  = 0  then 'NEW CUSTOMER'
           END) as "Customer_type"
from CUSTOMERS c
         left outer join ACCOUNTS a on a.CUSTOMER_ID=c.customer_id
         left outer join bookings b on b.ACCOUNT_ID=a.ACCOUNT_ID
         left outer join segment_count sc on sc.cust_id= c.CUSTOMER_ID
         left outer join cars cr on cr.vin=b.vin

group by c.customer_id, sc.NUM_SEGMENT_BOOKED,cr.segment, last_name, c.CUSTOMER_ID, first_name, sc.NUM_SEGMENT_BOOKED;
`;