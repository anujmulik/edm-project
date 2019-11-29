package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.InsurancePolicy;
import com.avengers.zipcar.service.InsurancePolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InsurancePolicyController {

    @Autowired
    InsurancePolicyService insurancePolicyService;

    @RequestMapping("/api/insurance-policy/all")
    public List<InsurancePolicy> getInsurancePolicies() {
        return insurancePolicyService.getAllInsurancePolicies();
    }

}
