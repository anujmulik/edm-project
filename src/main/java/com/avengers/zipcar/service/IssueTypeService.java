package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.IssueType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueTypeService {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<IssueType> getAllIssueTypes() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ISSUETYPES");
        return call.executeFunction(List.class);
    }

    public void addIssueType(IssueType issueType) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_ISSUE_TYPE");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("sla_ins", issueType.getSla())
                .addValue("name_ins", issueType.getName());
        call.execute(paramMap);
    }

    public void deleteIssueType(String issueTypeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_ISSUE_TYPE");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("issue_type_id_ins", issueTypeId);
        call.execute(paramMap);
    }

    public void updateIssueType (IssueType issueType, String issueTypeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_ISSUE_TYPE");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("issue_type_id_ins", issueTypeId)
                .addValue("sla_ins", issueType.getSla())
                .addValue("name_ins", issueType.getName());
        call.execute(paramMap);
    }

}
