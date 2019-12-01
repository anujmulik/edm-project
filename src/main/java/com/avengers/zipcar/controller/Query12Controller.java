package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query12;
import com.avengers.zipcar.service.Query12Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query12Controller {

    @Autowired
    Query12Service query12Service;

    @RequestMapping("/api/query12")
    public List<Query12> getQuery12() {
        return query12Service.getQuery12();
    }

}
