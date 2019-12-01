package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query7;
import com.avengers.zipcar.service.Query7Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query7Controller {

    @Autowired
    Query7Service query7Service;

    @RequestMapping("/api/query7")
    public List<Query7> getQuery7() {
        return query7Service.getQuery7();
    }


}
