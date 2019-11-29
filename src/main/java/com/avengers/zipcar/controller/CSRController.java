package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.CSR;
import com.avengers.zipcar.service.CSRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CSRController {

    @Autowired
    CSRService csrService;

    @RequestMapping("/api/csr")
    public List<CSR> getAllCSRByIssueType(@RequestParam("issue-type") String issueType) {
        return csrService.getCSRByIssueType(issueType.toUpperCase());
    }

}
