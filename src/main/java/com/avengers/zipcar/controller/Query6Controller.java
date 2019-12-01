package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query6;
import com.avengers.zipcar.service.Query6Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query6Controller {

    @Autowired
    Query6Service query6Service;

    @RequestMapping("/api/query6")
    public List<Query6> getQuery6() {
        return query6Service.getQuery6();
    }

}
