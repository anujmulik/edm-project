export const query2Text =
    `/* Query to find which CSR has how many tickets assigned grouped by ticket
     status and CRS employee id , if the employee is a manager, show how many
      people under him have been issued tickets. */

with mgr_tickets_for_emp as
         (select csr.escalation_contact as mgr_emp_id, count(t.TICKET_NUMBER)  
         as num_mgr_tickets from cust_serv_rep csr
         left outer join tickets t on t.employee_id = csr.employee_id
         where csr.ESCALATION_CONTACT is not null
         group by csr.escalation_contact)

select e.employee_id
     , count(t.ticket_number) as "No of Tickets"
     , (select num_mgr_tickets from mgr_tickets_for_emp 
     where mgr_emp_id = e.EMPLOYEE_ID) as "Num of Tickets Under Manager"
     , t.CURRENT_STATUS
     , t.SEVERITY
from EMPLOYEES e
         join cust_serv_rep csr on e.EMPLOYEE_ID = csr.EMPLOYEE_ID
         join tickets t on T.EMPLOYEE_ID=csr.EMPLOYEE_ID
group by e.employee_id, t.CURRENT_STATUS, t.SEVERITY
order by "Num of Tickets Under Manager",e.EMPLOYEE_ID;`;