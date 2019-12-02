export const query8Text = `/* provides profitability by car segment as compared to the service costs */

select c.segment,
       round(avg(b.base_booking_amount),2) as Average_Booking_Price,
       round(avg(j.labor_cost),2) as Average_Labour_Cost,
       round(avg(j.equipment_cost),2) as Average_Equipment_Cost,
       round(avg(s.cost),2) as Average_Service_Cost,
       round((round(avg(b.base_booking_amount),2)/round(avg(j.labor_cost),2)),2)*100 as Percentage_labour_cost,
       round((round(avg(b.base_booking_amount),2)/round(avg(j.equipment_cost),2)),2)*100 as Percentage_Equipment_Cost,
       round((round(avg(b.base_booking_amount),2)/round(avg(s.cost),2)),2)*100 as Cumulative_Return
from bookings b join cars c
                     on b.vin = c.vin
                join service_history s
                     on s.vin = c.vin
                join job_sheets j
                     on j.service_id = s.service_id
group by c.segment;`;