package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Plan;
import com.avengers.zipcar.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlanController {

    @Autowired
    PlanService planService;

    @RequestMapping("/api/plans/all")
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @RequestMapping("/api/plans")
    public List<Plan> getAllPlansByType(@RequestParam("type") String type) {
        return planService.getFilteredPlans(type.toUpperCase());
    }

}
