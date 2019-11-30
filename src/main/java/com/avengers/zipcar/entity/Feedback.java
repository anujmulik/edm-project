package com.avengers.zipcar.entity;

public class Feedback {

    private String feedbackId;
    private String feedbackText;
    private String category;
    private String rating;
    private String accountId;


    public Feedback(String feedbackId, String feedbackText, String category, String rating, String accountId) {
        this.feedbackId = feedbackId;
        this.feedbackText = feedbackText;
        this.category = category;
        this.rating = rating;
        this.accountId = accountId;
    }

    public String getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getFeedbackText() {
        return feedbackText;
    }

    public void setFeedbackText(String feedbackText) {
        this.feedbackText = feedbackText;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "feedbackId='" + feedbackId + '\'' +
                ", feedbackText='" + feedbackText + '\'' +
                ", category='" + category + '\'' +
                ", rating='" + rating + '\'' +
                ", accountId='" + accountId + '\'' +
                '}';
    }
}
