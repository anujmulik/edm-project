package com.avengers.zipcar.service;


import com.avengers.zipcar.entity.Query1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Query1Service {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Query1> getQuery1() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_QUERY_1");
        return call.executeFunction(List.class);
    }

}