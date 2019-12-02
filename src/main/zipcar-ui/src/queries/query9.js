export const query9Text = `/* shows fine related data per state and per category and how much amount it cost */

with region_data as ( SELECT * from  BOOKINGS b,REGIONS r, CAR_STATIONS c
                      where b.PICKUP_STATION_ID = c.STATION_ID
                        and c.REGION_ID = r.REGION_ID )

SELECT R.state,A.CATEGORY, COUNT(B.BOOKING_ID) "No of Bookings",SUM(PRICE) "Total Fines"
FROM FINE_CHARGES A , BOOKINGS B , region_data R
WHERE A.BOOKING_ID = B.BOOKING_ID
  AND R.BOOKING_ID = B.BOOKING_ID
GROUP BY R.STATE,A.CATEGORY
order by "Total Fines" DESC;`;
