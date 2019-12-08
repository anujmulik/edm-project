package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Payment> getAllPayments() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_PAYMENTS");
        return call.executeFunction(List.class);
    }

    public List<Payment> getPaymentsByAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_PAYMENTS_BY_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(List.class, paramMap);
    }

    public void addPayment(Payment payment) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_PAYMENTS");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("booking_id_ins", payment.getBookingId())
                .addValue("billing_str_addr_ins", payment.getBillingStreetAddress())
                .addValue("billing_city_ins", payment.getBillingCity())
                .addValue("billing_state_ins", payment.getBillingState())
                .addValue("billing_country_ins", payment.getBillingCountry())
                .addValue("account_id_ins", payment.getAccountId())
                .addValue("amount_ins", payment.getAmount());

        call.execute(paramMap);
    }

    public void updatePayment(Payment payment, String paymentId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_PAYMENT");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("billing_str_addr_ins", payment.getBillingStreetAddress())
                .addValue("billing_city_ins", payment.getBillingCity())
                .addValue("billing_state_ins", payment.getBillingState())
                .addValue("billing_country_ins", payment.getBillingCountry())
                .addValue("amount_ins", payment.getAmount())
                .addValue("payment_id_ins", paymentId);

        call.execute(paramMap);
    }

    public void confirmPayment(String paymentId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("CONFIRM_PAYMENT");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("payment_id_ins", paymentId);
        call.execute(paramMap);
    }

}
