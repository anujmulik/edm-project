package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.IssueType;
import com.avengers.zipcar.service.IssueTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueTypeController {

    @Autowired
    private IssueTypeService issueTypeService;

    @RequestMapping("/api/issue-types/all")
    public List<IssueType> getAllIssueTypes() {
        return issueTypeService.getAllIssueTypes();
    }

    @PostMapping("/api/issue-types")
    public void addIssueType(@RequestBody IssueType issueType) {
        issueTypeService.addIssueType(issueType);
    }

    @DeleteMapping("/api/issue-types/{issueTypeId}")
    public void deleteIssueType(@PathVariable String issueTypeId) {
        issueTypeService.deleteIssueType(issueTypeId);
    }

    @PutMapping("/api/issue-types/{issueTypeId}")
    public void updateIssueType(@PathVariable String issueTypeId, @RequestBody IssueType issueType)
    {
        issueTypeService.updateIssueType(issueType, issueTypeId);
    }

}

