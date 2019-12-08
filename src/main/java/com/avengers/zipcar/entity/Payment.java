package com.avengers.zipcar.entity;

import java.sql.Timestamp;

public class Payment {

    private String bookingId;
    private Timestamp paymentTime;
    private Status status;
    private String billingStreetAddress;
    private String billingCity;
    private String billingState;
    private String billingCountry;
    private float amount;
    private String paymentId;
    private String accountId;

    public Payment(String bookingId, Timestamp paymentTime, Status status, String billingStreetAddress, String billingCity, String billingState, String billingCountry, float amount, String paymentId, String accountId) {
        this.bookingId = bookingId;
        this.paymentTime = paymentTime;
        this.status = status;
        this.billingStreetAddress = billingStreetAddress;
        this.billingCity = billingCity;
        this.billingState = billingState;
        this.billingCountry = billingCountry;
        this.amount = amount;
        this.paymentId = paymentId;
        this.accountId = accountId;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public Timestamp getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(Timestamp paymentTime) {
        this.paymentTime = paymentTime;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getBillingStreetAddress() {
        return billingStreetAddress;
    }

    public void setBillingStreetAddress(String billingStreetAddress) {
        this.billingStreetAddress = billingStreetAddress;
    }

    public String getBillingCity() {
        return billingCity;
    }

    public void setBillingCity(String billingCity) {
        this.billingCity = billingCity;
    }

    public String getBillingState() {
        return billingState;
    }

    public void setBillingState(String billingState) {
        this.billingState = billingState;
    }

    public String getBillingCountry() {
        return billingCountry;
    }

    public void setBillingCountry(String billingCountry) {
        this.billingCountry = billingCountry;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "bookingId='" + bookingId + '\'' +
                ", paymentTime=" + paymentTime +
                ", status=" + status +
                ", billingStreetAddress='" + billingStreetAddress + '\'' +
                ", billingCity='" + billingCity + '\'' +
                ", billingState='" + billingState + '\'' +
                ", billingCountry='" + billingCountry + '\'' +
                ", amount=" + amount +
                ", paymentId='" + paymentId + '\'' +
                ", accountId='" + accountId + '\'' +
                '}';
    }

    public enum Status {
        INITIATED, COMPLETED
    }
}
