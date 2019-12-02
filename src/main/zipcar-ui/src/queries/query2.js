export const query2Text =
    `/* Query to find which CSR has how many tickets assigned grouped by ticket
     status and CRS employee id , if the employee is a manager, show how many
      people under him have been issued tickets. */

with mgr_tickets_for_emp as
         (select csr.escalation_contact as mgr_emp_id,t.SEVERITY as sevr, count(t.TICKET_NUMBER) as num_mgr_tickets
          from cust_serv_rep csr
                   left outer join tickets t on t.employee_id = csr.employee_id
          where csr.ESCALATION_CONTACT is not null
            and t.SEVERITY IS NOT NULL
          group by csr.escalation_contact,t.SEVERITY),
     emp_info as (
         select e.employee_id
              , count(t.ticket_number) as "No of Tickets"
              , t.CURRENT_STATUS
              , t.SEVERITY
         from EMPLOYEES e
                  join cust_serv_rep csr on e.EMPLOYEE_ID = csr.EMPLOYEE_ID
                  join tickets t on T.EMPLOYEE_ID=csr.EMPLOYEE_ID
         group by e.employee_id, t.CURRENT_STATUS, t.SEVERITY
         order by e.EMPLOYEE_ID)

select all_emps.EMPLOYEE_ID
     ,all_emps.NO_OF_TICKETS
     ,all_emps.NUM_OF_TICKETS_UNDER_MANAGER
     ,all_emps.CURRENT_STATUS
     ,all_emps.SEVERITY
from
    (select ei.EMPLOYEE_ID
          ,case when mg.sevr IS NULL
                    THEN CASE WHEN ei.SEVERITY NOT IN (select ei1.SEVERITY from emp_info ei1 where ei1.EMPLOYEE_ID = ei.EMPLOYEE_ID)
                                  THEN 0
                              ELSE
                                  ei."No of Tickets" END
                WHEN mg.sevr IS NOT NULL
                    THEN CASE WHEN mg.sevr NOT IN (select ei1.SEVERITY from emp_info ei1 where ei1.EMPLOYEE_ID = ei.EMPLOYEE_ID)
                                  THEN 0
                              ELSE
                                  ei."No of Tickets" END
            END AS NO_OF_TICKETS
          ,coalesce(to_char(mg.num_mgr_tickets), 'N/A') as NUM_OF_TICKETS_UNDER_MANAGER
          ,ei.CURRENT_STATUS
          ,ei.SEVERITY sev1
          ,case WHEN mg.sevr IS NULL
                    THEN ei.SEVERITY
                ELSE mg.sevr END as "SEVERITY"
     from emp_info ei  left outer join mgr_tickets_for_emp mg on mg.mgr_emp_id = ei.EMPLOYEE_ID) all_emps
GROUP BY all_emps.EMPLOYEE_ID
       ,all_emps.NO_OF_TICKETS
       ,all_emps.NUM_OF_TICKETS_UNDER_MANAGER
       ,all_emps.CURRENT_STATUS
       ,all_emps.SEVERITY
ORDER BY all_emps.EMPLOYEE_ID;`;