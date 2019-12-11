package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Account> getAllAccounts() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ALL_ACCOUNTS");
        return call.executeFunction(List.class);
    }

    public Account getAccountByAccountId(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ACCOUNT_BY_ID");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(Account.class, paramMap);
    }

    public Account deactivateAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("DEACTIVATE_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(Account.class, paramMap);
    }

    public void addAccount(Account account) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("ADD_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", account.getAccountId())
                .addValue("first_name_ins", account.getFirstName())
                .addValue("last_name_ins", account.getLastName())
                .addValue("email_ins", account.getEmail())
                .addValue("dl_num_ins", account.getDlNumber())
                .addValue("phone_ins", account.getPhone())
                .addValue("dob_ins", account.getDateOfBirth())
                .addValue("street_addr_ins", account.getStreetAddress())
                .addValue("city_ins", account.getCity())
                .addValue("state_ins", account.getState())
                .addValue("country_ins", account.getCountry())
                .addValue("zip_code_ins", account.getZipCode())
                .addValue("dl_expiry_ins", account.getDlExpiryDate())
                .addValue("dl_issue_state_ins", account.getIssueState())
                .addValue("username_ins", account.getUsername())
                .addValue("password_ins", account.getPassword())
                .addValue("type_ins", account.getPlanType());
        call.execute(paramMap);
    }

    public void updateAccount(Account account, String accountId, String customerId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_ACCOUNT");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("account_id_ins", accountId)
                .addValue("customer_id_ins", customerId)
                .addValue("dl_num_ins", account.getDlNumber())
                .addValue("phone_ins", account.getPhone())
                .addValue("street_addr_ins", account.getStreetAddress())
                .addValue("city_ins", account.getCity())
                .addValue("state_ins", account.getState())
                .addValue("country_ins", account.getCountry())
                .addValue("zip_code_ins", account.getZipCode())
                .addValue("dl_expiry_ins", account.getDlExpiryDate())
                .addValue("dl_issue_state_ins", account.getIssueState())
                .addValue("password_ins", account.getPassword());
        call.execute(paramMap);
    }

    public void selectPlan(String accountId, String planId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("OPT_FOR_PLAN");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("account_id_ins", accountId)
                .addValue("plan_id_ins", planId);
        call.execute(paramMap);
    }
}
