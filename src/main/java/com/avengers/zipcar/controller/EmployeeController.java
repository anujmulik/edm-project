package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Employee;
import com.avengers.zipcar.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @RequestMapping("/api/employees/all")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @RequestMapping("/api/employees")
    public List<Employee> getAllEmployeesByType(@RequestParam("type") String type) {
        return employeeService.getFilteredEmployees(type.toUpperCase());
    }

}
