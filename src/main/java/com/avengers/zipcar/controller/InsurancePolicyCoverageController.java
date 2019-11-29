package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.InsurancePolicyCoverage;
import com.avengers.zipcar.service.InsurancePolicyCoverageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InsurancePolicyCoverageController {

    @Autowired
    InsurancePolicyCoverageService insurancePolicyCoverageService;

    @RequestMapping("/api/insurance-policy-coverage")
    public List<InsurancePolicyCoverage> getInsurancePoliciesCoverage(@RequestParam("policy-number") String policyNo) {
        return insurancePolicyCoverageService.getFilteredPoliciesCoverage(policyNo);
    }

}
