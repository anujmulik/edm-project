package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query5;
import com.avengers.zipcar.service.Query5Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query5Controller {

    @Autowired
    Query5Service query5Service;

    @RequestMapping("/api/query5")
    public List<Query5> getQuery5() {
        return query5Service.getQuery5();
    }

}
