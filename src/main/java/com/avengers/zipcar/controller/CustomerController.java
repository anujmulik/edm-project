package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Customer;
import com.avengers.zipcar.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping("/api/customers/all")
    public List<Customer> getCustomers() {
        return customerService.getAllCustomers();
    }

}
