package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Query9;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Query9Service {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Query9> getQuery9() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_QUERY_9");
        return call.executeFunction(List.class);
    }

}
