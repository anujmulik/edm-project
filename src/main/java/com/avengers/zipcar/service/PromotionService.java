package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Promotion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Promotion> getAllPromotionServices() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_PROMOTIONS");
        return call.executeFunction(List.class);
    }
}
