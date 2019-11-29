package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Username;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsernameService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Username> getAllUsernames() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_USERNAMES");
        return call.executeFunction(List.class);
    }
}
