package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query9;
import com.avengers.zipcar.service.Query9Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query9Controller {

    @Autowired
    Query9Service query9Service;

    @RequestMapping("/api/query9")
    public List<Query9> getQuery9() {
        return query9Service.getQuery9();
    }


}
