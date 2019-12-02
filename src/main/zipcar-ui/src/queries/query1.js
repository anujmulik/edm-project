export const query1Text = `/* Queries to find bookings for each month and year 
        combination and total bookings till that year and month */
With mind AS(
    select add_months(sysdate,-24) as mindate from dual),
     listmonths (lmonth) AS (
         SELECT mindate as lmonth FROM mind UNION ALL
         SELECT add_months(lmonth,1) FROM listmonths WHERE add_months(lmonth,1) <= sysdate

     ),
     monyear as (
         SELECT extract(year from lmonth) as lyear, extract(month from lmonth) as lmonth
         FROM listmonths
     ),
     borr as (
         SELECT booking_id,booking_time, extract(year from Booking_time) 
         as iyear, extract(month from booking_time) as imonth
         FROM mind, bookings iss where booking_time >= mind.mindate
     ),
     monborr as ( SELECT iyear, imonth, count(*) as numborr 
     FROM borr GROUP BY iyear, imonth
     ),
     rawstats as (
         SELECT lyear, lmonth, coalesce(numborr,0) ctissue 
         FROM monyear my LEFT OUTER JOIN monborr mb 
         on my.lyear = mb.iyear and my.lmonth = mb.imonth
     ),
     monstats as (
         SELECT lyear, lmonth, ctissue,LEAD(ctissue,1) OVER (ORDER by lyear,lmonth) 
         AS nmc,LAG (ctissue,1) OVER (ORDER by lyear,lmonth) AS lmc,
                LAG (ctissue,12) OVER (ORDER by lyear,lmonth) AS lyc,
                coalesce(sum(ctissue) OVER (partition by lyear order by lmonth), 0) 
                AS ytdc FROM rawstats
     )
SELECT lyear ||'-'|| to_char(to_date(lmonth,'MM'),'Month') as PERIOD,
    ctissue AS NO_OF_BOOKINGS
     ,lyc as LAST_YEAR_BOOKINGS
     ,lmc as LAST_MONTH_BOOKINGS
     ,nmc as NEXT_MONTH_BOOKINGS
     ,coalesce(to_char(ctissue-lyc),'N/A') as ANNUAL_CHANGE
     ,coalesce(to_char(ctissue-lmc),'N/A') as MONTHLY_CHANGE
     ,ytdc as YTD_BOOKINGS
FROM monstats
ORDER BY lyear desc, lmonth desc;`;