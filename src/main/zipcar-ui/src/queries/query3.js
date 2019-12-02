export const query3Text = `
/*
 for each car segment find which car segment had how many bookings, also 
 how many cars do we own in each of the segments which region has how many
 of cars in that segment. Also find what was the total revenue generated 
 by each car segment. what  was the maximum number of bookings for each 
 segment in any month.
*/


with segment_revenue as (
    select sum(b.BASE_BOOKING_AMOUNT) as TOTAL_REVENUE , count(c.vin) as cars_per_segment, c.SEGMENT SEGMENT from cars c
                                                                                                                      left outer join bookings b
                                                                                                                                      on c.vin=b.vin
    group by c.SEGMENT),

     month_max as (
         select  count (b.BOOKING_ID) booking_count_monthly, to_char(b.START_TIME, 'MM') as MONTH ,
                 c.segment from BOOKINGS b
                                    right outer join cars c on b.VIN = c.VIN
         group by to_char(b.START_TIME, 'MM'), c.segment
     )
select  c.SEGMENT, count(distinct c.vin) as CARS_IN_SEGMENT , count(distinct c.model)
                                         as MODELS_IN_SEGMENT,
        count(distinct type)
                                         as TYPE_IN_SEGMENT, sr.total_revenue , count(distinct r.REGION_ID) as NUMBER_OF_REGIONS,
        max(mm.booking_count_monthly)
                                         as MAX_BOOKINGS_IN_MONTH, count(distinct s.service_id ) as NUM_TIMES_SERVICED
from cars c
         left outer join bookings b on b.VIN = c.VIN
         left outer join REGIONS r on c.REGION_ID = r.REGION_ID
         left outer join segment_revenue sr on sr.SEGMENT= c.SEGMENT
         left outer join month_max mm on mm.segment = c.segment
         left outer join service_history s on c.vin= s.vin
group by  sr.total_revenue, c.segment;
`;