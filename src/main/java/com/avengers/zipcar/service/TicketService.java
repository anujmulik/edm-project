package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Ticket> getAllTickets() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_TICKETS");
        return call.executeFunction(List.class);
    }

    public List<Ticket> getFilteredTickets(String empId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FILTERED_TICKETS");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", empId);
        return call.executeFunction(List.class, paramMap);
    }

    public List<Ticket> getSubordinateTickets(String empId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_SUBORDINATE_TICKETS");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", empId);
        return call.executeFunction(List.class, paramMap);
    }

}
