package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.InsurancePolicyCoverage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsurancePolicyCoverageService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<InsurancePolicyCoverage> getFilteredPoliciesCoverage(String policyNo) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_INS_COVERAGE_BY_POLICY");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("policyNumber", policyNo);
        return call.executeFunction(List.class, paramMap);
    }
}
