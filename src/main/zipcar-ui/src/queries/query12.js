export const query12Text = `/* Retrieve information of every known issue type and which of the 
csr employees are capable of resolving it. in addition to this, also
display the number of issue types solved so far. */

select i.ISSUE_TYPE_ID as Issue_Type_ID
       ,count(cs.EMPLOYEE_ID) as No_People_Who_Can_Resolve
       ,LISTAGG(cs.EMPLOYEE_ID, '; ') within group ( ORDER BY cs.EMPLOYEE_ID) as Employee_ID
       ,LISTAGG(e.FIRST_NAME || ' ' || e.LAST_NAME, '; ') within group ( Order by cs.EMPLOYEE_ID ) Employee_Names
       ,(select count(*)
            from tickets
            where ISSUE_TYPE_ID = i.ISSUE_TYPE_ID
              and EMPLOYEE_ID in (select EMPLOYEE_ID
                                    from CUST_SERV_REP_SOLVE
                                    where TICKETS.ISSUE_TYPE_ID = i.ISSUE_TYPE_ID )) Num_Resolved
from ISSUE_TYPE i left outer join CUST_SERV_REP_SOLVE cs on i.ISSUE_TYPE_ID = cs.ISSUE_TYPE_ID
                  left outer join EMPLOYEES e on cs.EMPLOYEE_ID = e.EMPLOYEE_ID
group by i.ISSUE_TYPE_ID;`;