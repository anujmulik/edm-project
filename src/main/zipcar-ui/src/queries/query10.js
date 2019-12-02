export const query10Text = `/* Query to retrieve no of times chauffeurs were used by a customer along with number 
of tickets raised by each customer and the type of the ticket raised. */

select c.customer_id
     ,first_name
     ,last_name
     ,(select count(*)
        from bookings b
        where b.ACCOUNT_ID = a.ACCOUNT_ID
          and CHAUFFER_PICKUP = 'Y') "Chauffuer Pickup Count"
     ,(select count(*)
        from TICKETS t
        where t.ACCOUNT_ID = a.ACCOUNT_ID) "Tickets raised count"
     ,(select count(*)
        from TICKETS t
        where t.ACCOUNT_ID = a.ACCOUNT_ID
          and t.SEVERITY = 'MAJOR') "Major Tickets"
     ,(select count(*)
        from TICKETS t
        where t.ACCOUNT_ID = a.ACCOUNT_ID
          and t.SEVERITY = 'MINOR') "Minor Tickets"
     ,(select count(*)
        from TICKETS t
        where t.ACCOUNT_ID = a.ACCOUNT_ID
          and t.SEVERITY = 'CRITICAL') "Critical Tickets"
from customers c,ACCOUNTS a
where a.CUSTOMER_ID = c.CUSTOMER_ID;`;