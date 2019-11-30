package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.IssueType;
import com.avengers.zipcar.service.IssueTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueTypeController {

    @Autowired
    IssueTypeService issueTypeService;

    @RequestMapping("/api/issuetype/all")
    public List<IssueType> getAllIssueTypes() {
        return issueTypeService.getAllIssueTypes();
    }

    @PostMapping("/api/issuetype")
    void addIssueType(@RequestBody IssueType issueType) {
        issueTypeService.addIssueType(issueType);
    }

    @DeleteMapping("/api/issuetype/{issueTypeId}")
    public void deleteIssueType(@PathVariable String issueTypeId) {
        issueTypeService.deleteIssueType(issueTypeId);
    }

    @PutMapping("/api/issuetype/{issueTypeId}")
    public void updateIssueType(@PathVariable String issueTypeId, @RequestBody IssueType issueType)
    {
        issueTypeService.updateIssueType(issueType, issueTypeId);
    }

}

