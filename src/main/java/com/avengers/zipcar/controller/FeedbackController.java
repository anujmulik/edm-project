package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Feedback;
import com.avengers.zipcar.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;

    @RequestMapping("/api/feedback/all")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedbacks();
    }

    @RequestMapping("/api/feedback")
    public List<Feedback> getFeedbackByAccount(@RequestParam("account-id") String accountId) {
        return feedbackService.getFeedbackByAccount(accountId.toUpperCase());
    }

    @PostMapping("/api/feedback")
    public void addFeedback(@RequestBody Feedback feedback) {
        feedbackService.addFeedback(feedback);
    }

    @DeleteMapping("/api/feedback/{feedbackId}")
    public void deleteFeedback(@PathVariable String feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
    }

    @PutMapping("/api/feedback/{feedbackId}")
    public void updateFeedback(@PathVariable String feedbackId, @RequestBody Feedback feedback)
    {
        feedbackService.updateFeedback(feedback, feedbackId);
    }

}

