package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Query3;
import com.avengers.zipcar.service.Query3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Query3Controller {

    @Autowired
    Query3Service query3Service;

    @RequestMapping("/api/query3")
    public List<Query3> getQuery3() {
        return query3Service.getQuery3();
    }

}
