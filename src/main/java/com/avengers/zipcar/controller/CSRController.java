package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.CSR;
import com.avengers.zipcar.service.CSRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CSRController {

    @Autowired
    private CSRService csrService;

    @RequestMapping("/api/csr")
    public List<CSR> getAllCSRByIssueType(@RequestParam("issue-type") String issueType) {
        return csrService.getCSRByIssueType(issueType.toUpperCase());
    }

    @RequestMapping("/api/csr/all")
    public List<CSR> getAllCSRByIssueType() {
        return csrService.getAllCSR();
    }

    @PostMapping("/api/csr")
    public void addNewCSREmployee(@RequestBody CSR csr) {
        csrService.addCSREmployee(csr);
    }

    @DeleteMapping("/api/csr/{employeeId}")
    public void deleteCSREmployee(@PathVariable String employeeId) {
        csrService.deleteCSREmployee(employeeId);
    }

    @PutMapping("/api/csr/{employeeId}")
    public void updateCSREmployee(@PathVariable String employeeId, @RequestBody CSR csr)
    {
        csrService.updateCSREmployee(csr, employeeId);
    }

}
