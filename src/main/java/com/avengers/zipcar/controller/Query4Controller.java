package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query4;
import com.avengers.zipcar.service.Query4Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query4Controller {

    @Autowired
    Query4Service query4Service;

    @RequestMapping("/api/query4")
    public List<Query4> getQuery4() {
        return query4Service.getQuery4();
    }

}
