package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.ServiceCentre;
import com.avengers.zipcar.service.ServiceCentreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ServiceCentreController {

    @Autowired
    ServiceCentreService serviceCentreService;

    @RequestMapping("/api/insurance-policy/all")
    public List<ServiceCentre> getServiceCentres() {
        return serviceCentreService.getAllServiceCentres();
    }

}
