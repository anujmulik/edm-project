package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Employee> getAllEmployees() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_EMPLOYEES");
        return call.executeFunction(List.class);
    }

    public List<Employee> getFilteredEmployees(String type) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_EMPLOYEES_BY_TYPE");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employeeType", type);
        return call.executeFunction(List.class, paramMap);
    }
}
