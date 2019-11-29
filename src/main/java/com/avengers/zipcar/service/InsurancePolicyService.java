package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.InsurancePolicy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsurancePolicyService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<InsurancePolicy> getAllInsurancePolicies() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_INSURANCE_POLICIES");
        return call.executeFunction(List.class);
    }
}
