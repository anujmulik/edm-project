package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Plan> getAllPlans() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_PLANS");
        return call.executeFunction(List.class);
    }

    public List<Plan> getFilteredPlans(String type) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_PLANS_BY_TYPE");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("account_type_ins", type);
        return call.executeFunction(List.class, paramMap);
    }
}
