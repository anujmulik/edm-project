export const query11Text = `/* Query retrieves the resolution information of every ticket. */

with date_tickets as ( select ticket_number
                            ,round((extract(day from (RESOLUTION_DATE - CREATION_DATE))* 24 +
                                    extract(hour from (RESOLUTION_DATE - CREATION_DATE)) +
                                    extract(minute from (RESOLUTION_DATE - CREATION_DATE))/60)/24, 2) "resolution_time"
                       from TICKETS t, issue_type i
                        where t.ISSUE_TYPE_ID = i.ISSUE_TYPE_ID)


select t.ticket_number
     ,d."resolution_time"
     ,i.SLA - d."resolution_time" as"Difference"
     ,i.SLA
     ,case
        when i.SLA - d."resolution_time" > 0
        then 'Resolved Early'
        when i.SLA - d."resolution_time" < 0
        then 'Resolved Late'
        else
            'Resolved Ontime'
        end "Resolution Status"
     ,case
          when (select count(*) from TICKET_LOG where TICKET_NUMBER = t.TICKET_NUMBER and activity_log = 'Re-Assigned') > 0
              then 'Y'
          when (select count(*) from TICKET_LOG where TICKET_NUMBER = t.TICKET_NUMBER and activity_log = 'Re-Assigned') = 0
              then 'N'
    end "isReassigned"
     ,case
          when (select count(*) from TICKET_LOG where TICKET_NUMBER = t.TICKET_NUMBER and activity_log = 'Escalated') > 0
              then 'Y'
          when (select count(*) from TICKET_LOG where TICKET_NUMBER = t.TICKET_NUMBER and activity_log = 'Escalated') = 0
              then 'N'
    end "isEscalated"
from TICKETS t, issue_type i, date_tickets d
where t.ISSUE_TYPE_ID = i.ISSUE_TYPE_ID
and t.TICKET_NUMBER = d.TICKET_NUMBER;`;