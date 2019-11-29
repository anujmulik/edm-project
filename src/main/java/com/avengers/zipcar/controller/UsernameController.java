package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Username;
import com.avengers.zipcar.service.UsernameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsernameController {

    @Autowired
    UsernameService usernameService;

    @RequestMapping("/api/username/all")
    public List<Username> getAllUsernames() {
        return usernameService.getAllUsernames();
    }

}
