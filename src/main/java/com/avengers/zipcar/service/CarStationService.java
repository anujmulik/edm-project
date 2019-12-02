package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.CarStation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarStationService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<CarStation> getAllCarStations() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ALL_CAR_STATIONS");
        return call.executeFunction(List.class);
    }
}
