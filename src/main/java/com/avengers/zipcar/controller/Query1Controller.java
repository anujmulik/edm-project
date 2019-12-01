package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query1;
import com.avengers.zipcar.service.Query1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query1Controller {

    @Autowired
    Query1Service query1Service;

    @RequestMapping("/api/query1")
    public List<Query1> getQuery1() {
        return query1Service.getQuery1();
    }

}
