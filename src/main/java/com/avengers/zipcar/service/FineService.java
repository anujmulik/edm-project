package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Fines;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FineService {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Fines> getAllFines() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FINES");
        return call.executeFunction(List.class);
    }

    public List<Fines> getFinesByAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FINES_BY_ACC");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(List.class, paramMap);
    }

    public List<Fines> getFinesByBookingId(String bookingId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FINES_BY_BOOKING");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId);
        return call.executeFunction(List.class, paramMap);
    }

    public void addFines(Fines fines) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_FINES");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", fines.getBookingId())
                .addValue("category_ins", fines.getCategory())
                .addValue("price_ins", fines.getPrice())
                .addValue("description_ins", fines.getDescription());
        call.execute(paramMap);
    }

    public void deleteFines(String bookingId, int instance) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_FINES");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("instance_ins", instance)
                .addValue("booking_id_ins", bookingId);
        call.execute(paramMap);
    }

    public void updateFines(Fines fines, String bookingId, int instance) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_FINES");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId)
                .addValue("category_ins", fines.getCategory())
                .addValue("instance_ins", instance)
                .addValue("price_ins", fines.getPrice())
                .addValue("description_ins", fines.getDescription());
        call.execute(paramMap);
    }

}
