package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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
    public BigDecimal getBaseAmount(Timestamp endTime, Timestamp startTime, String vin) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("CALCULATE_BASE_PRICE");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("end_time_ins", endTime)
                .addValue("start_time_ins", startTime)
                .addValue("vin_ins", vin);
        return call.executeFunction(BigDecimal.class, paramMap);
    }

    public void startBooking(String bookingId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("START_BOOKING");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId);
        call.execute(paramMap);
    }

    public void cancelBooking(String bookingId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("CANCEL_BOOKING");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId);
        call.execute(paramMap);
    }

    public void endBooking(String bookingId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("END_BOOKING");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId);
        call.execute(paramMap);
    }

    public void initiateBooking(Booking booking) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_BOOKINGS");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("DROP_LOC_LAT_INS", booking.getDropLocationLat())
                .addValue("DROP_LOC_LONG_INS", booking.getDropLocationLong())
                .addValue("PICKUP_LOC_LAT_INS", booking.getPickupLocationLat())
                .addValue("PICKUP_LOC_LONG_INS", booking.getPickupLocationLong())
                .addValue("BOOKING_TIME_INS", booking.getBookingTime())
                .addValue("END_TIME_INS", booking.getEndTime())
                .addValue("ACCOUNT_ID_INS", booking.getAccountId())
                .addValue("VIN_INS", booking.getVin())
                .addValue("PROMOCODE_INS", booking.getPromocode())
                .addValue("PICKUP_STATION_ID_INS", booking.getPickupStationId())
                .addValue("DROPOFF_STATION_ID_INS", booking.getDropoffStationId())
                .addValue("CHAUFFER_PICKUP_INS", booking.getIsChauffeurPickup());
        call.execute(paramMap);
    }
    public void updateBooking(String bookingId, float finalFuel, float totalDistance, Timestamp actualEndTime ) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_BOOKING");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId)
                .addValue("final_fuel_ins", finalFuel)
                .addValue("total_distance_travelled_ins", totalDistance)
                .addValue("actual_end_time_ins", actualEndTime);
        call.execute(paramMap);
    }



}
