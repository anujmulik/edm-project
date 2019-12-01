package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Booking> getAllBookings() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_BOOKINGS");
        return call.executeFunction(List.class);
    }

    public List<Booking> getBookingsByAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_BOOKINGS_BY_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(List.class, paramMap);
    }
    public Float getBaseAmount(Timestamp endTime, Timestamp startTime, String vin) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("CALCULATE_BASE_PRICE");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("end_time_ins", endTime)
                .addValue("start_time_ins", startTime)
                .addValue("vin_ins", vin);
        return call.executeFunction(Float.class, paramMap);
    }

}
