package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Refund;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RefundService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Refund> getAllRefunds() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_REFUNDS");
        return call.executeFunction(List.class);
    }

    public List<Refund> getRefundsByAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_REFUNDS_BY_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(List.class, paramMap);
    }

    public void addRefund(Refund refund) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_REFUNDS");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("amount_ins", refund.getAmount())
                .addValue("booking_id_ins", refund.getBookingId())
                .addValue("reason_ins", refund.getReason())
                .addValue("refund_timestamp_ins", refund.getRefundTimestamp());
        call.execute(paramMap);
    }

    public void deleteRefund(String bookingId, int instance ) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_REFUND_BY_BOOKING");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId)
                .addValue("instance_ins", instance);
        call.execute(paramMap);
    }

    public void updateRefund (Refund refund, int instance, String bookingId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_REFUND");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", bookingId)
                .addValue("instance_ins", instance)
                .addValue("amount_ins", refund.getAmount())
                .addValue("booking_id_ins", refund.getBookingId())
                .addValue("reason_ins", refund.getReason())
                .addValue("refund_timestamp_ins", refund.getRefundTimestamp());
        call.execute(paramMap);
    }

}
