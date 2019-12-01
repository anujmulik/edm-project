package com.avengers.zipcar.service;


import com.avengers.zipcar.entity.Query11;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Query11Service {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Query11> getQuery11() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_QUERY_11");
        return call.executeFunction(List.class);
    }

}