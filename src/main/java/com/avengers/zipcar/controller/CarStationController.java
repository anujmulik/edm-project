package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.CarStation;
import com.avengers.zipcar.service.CarStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarStationController {

    @Autowired
    CarStationService carStationService;

    @RequestMapping("/api/car-stations/all")
    public List<CarStation> getAllCarStations() {
        return carStationService.getAllCarStations();
    }

}
