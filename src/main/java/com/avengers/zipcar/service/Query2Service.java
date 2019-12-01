package com.avengers.zipcar.service;


import com.avengers.zipcar.entity.Query2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Query2Service {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Query2> getQuery2() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_QUERY_2");
        return call.executeFunction(List.class);
    }

}