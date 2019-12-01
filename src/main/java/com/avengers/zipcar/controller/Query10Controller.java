package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query10;
import com.avengers.zipcar.service.Query10Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query10Controller {

    @Autowired
    Query10Service query10Service;

    @RequestMapping("/api/query10")
    public List<Query10> getQuery10() {
        return query10Service.getQuery10();
    }

}
