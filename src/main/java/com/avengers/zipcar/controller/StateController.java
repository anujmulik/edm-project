package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.State;
import com.avengers.zipcar.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StateController {

    @Autowired
    StateService stateService;

    @RequestMapping("/api/states/all")
    public List<State> getCars() {
        return stateService.getAllStates();
    }

}
