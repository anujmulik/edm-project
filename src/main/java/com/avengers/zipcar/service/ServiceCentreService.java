package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.ServiceCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceCentreService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<ServiceCentre> getAllServiceCentres() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_SERVICE_CENTRES");
        return call.executeFunction(List.class);
    }
}






