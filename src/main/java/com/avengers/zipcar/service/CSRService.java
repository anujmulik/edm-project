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
}
