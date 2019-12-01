package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query11;
import com.avengers.zipcar.service.Query11Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query11Controller {

    @Autowired
    Query11Service query11Service;

    @RequestMapping("/api/query11")
    public List<Query11> getQuery11() {
        return query11Service.getQuery11();
    }

}
