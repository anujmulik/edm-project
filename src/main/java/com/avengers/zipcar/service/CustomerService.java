package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {


    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Customer> getAllCustomers() {

        return jdbcTemplate.query(
                "SELECT id, first_name, last_name FROM customers_temp",
                (rs, rowNum) -> new Customer(rs.getLong("id"), rs.getString("first_name"), rs.getString("last_name"))
        );

    }
}
