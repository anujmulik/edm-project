package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query2;
import com.avengers.zipcar.service.Query2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query2Controller {

    @Autowired
    Query2Service query2Service;

    @RequestMapping("/api/query2")
    public List<Query2> getQuery2() {
        return query2Service.getQuery2();
    }

}
