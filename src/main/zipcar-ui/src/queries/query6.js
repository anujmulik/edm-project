export const query6Text = `/* for each state show the most popular segment of cars based on 
   number of bookings for that segment.
*/


with segment_count_per_state as(

    select C.SEGMENT as segment, count(b.booking_id) as NUM_SEGMENT_BOOKED, r.STATE as state ,
           dense_rank()  over (partition by r.STATE
               order by count(b.booking_id) desc
               ) as segment_rank
    from  bookings b
              join cars c on b.VIN = c.VIN
              join CAR_STATIONS cs on b.PICKUP_STATION_ID = cs.STATION_ID
              join REGIONS r on cs.REGION_ID = r.REGION_ID
    group by r.STATE, c.SEGMENT
),

     seg_rank as (
         SELECT state, listagg(segment, '; ') within group (order by segment_rank) over (partition by state) as seg_list
         FROM segment_count_per_state
         WHERE segment_rank <=1
     )

select sc.state_code as STATE,  NVL(sr.seg_list, 'N/A') as MOST_POPULAR_SEGMENT
from states sc left outer join seg_rank sr on sr.state=sc.STATE_CODE;`;