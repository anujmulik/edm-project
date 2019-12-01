package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<State> getAllStates() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ALL_STATES");
        return call.executeFunction(List.class);
    }
}
