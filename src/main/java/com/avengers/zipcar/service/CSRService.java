package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.CSR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CSRService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<CSR> getCSRByIssueType(String type) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_CSR_BY_TYPE");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("issueType", type);
        return call.executeFunction(List.class, paramMap);
    }

    public void addCSREmployee(CSR csr) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_CSR");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("first_name_ins", csr.getFirstName())
                .addValue("last_name_ins", csr.getLastName())
                .addValue("shift_details_ins", csr.getShiftDetails())
                .addValue("email_id_ins", csr.getEmailId())
                .addValue("escalation_contact_ins", csr.getEscalationContact());
         call.execute(paramMap);
    }

    public void deleteCSREmployee(String employeeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_CSR_BY_EMPID");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", employeeId);
        call.execute(paramMap);
    }

    public void updateCSREmployee (CSR csr, String employeeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_CSR_EMPLOYEE");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", employeeId)
                .addValue("first_name_ins", csr.getFirstName())
                .addValue("last_name_ins", csr.getLastName())
                .addValue("shift_details_ins", csr.getShiftDetails())
                .addValue("email_id_ins", csr.getEmailId())
                .addValue("escalation_contact_ins", csr.getEscalationContact());
        call.execute(paramMap);
    }

}
