package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Car;
import com.avengers.zipcar.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    CarService carService;

    @RequestMapping("/api/cars/all")
    public List<Car> getCars() {
        return carService.getAllCars();
    }

}
