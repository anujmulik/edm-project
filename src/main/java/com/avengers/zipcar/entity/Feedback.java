package com.avengers.zipcar.entity;

public class Feedback {

    private String feedbackId;
    private String feedbackText;
    private String category;
    private int rating;
    private String accountId;
    private String username;


    public Feedback(String feedbackId, String feedbackText, String category, int rating, String accountId, String username) {
        this.feedbackId = feedbackId;
        this.feedbackText = feedbackText;
        this.category = category;
        this.rating = rating;
        this.accountId = accountId;
        this.username = username;
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "feedbackId='" + feedbackId + '\'' +
                ", feedbackText='" + feedbackText + '\'' +
                ", category='" + category + '\'' +
                ", rating=" + rating +
                ", accountId='" + accountId + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}
