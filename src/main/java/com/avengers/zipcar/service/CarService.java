package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Car> getAllCars() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_CARS");
        return call.executeFunction(List.class);
    }
}
