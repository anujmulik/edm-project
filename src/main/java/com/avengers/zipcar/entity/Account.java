package com.avengers.zipcar.entity;

import java.sql.Date;

public class Account {

    private String customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String dlNumber;
    private String phone;
    private Date dateOfBirth;
    private String streetAddress;
    private String city;
    private String state;
    private String country;
    private String zipCode;
    private Date dlExpiryDate;
    private String issueState;
    private String accountId;
    private String isActive;
    private String username;
    private String password;
    private String planId;
    private String planType;
    private Date planStartDate;
    private Date planEndDate;
    private float amountDue;

    public Account(String customerId, String firstName, String lastName, String email, String dlNumber, String phone, Date dateOfBirth, String streetAddress, String city, String state, String country, String zipCode, Date dlExpiryDate, String issueState, String accountId, String isActive, String username, String password, String planId, String planType, Date planStartDate, Date planEndDate, float amountDue) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dlNumber = dlNumber;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
        this.dlExpiryDate = dlExpiryDate;
        this.issueState = issueState;
        this.accountId = accountId;
        this.isActive = isActive;
        this.username = username;
        this.password = password;
        this.planId = planId;
        this.planType = planType;
        this.planStartDate = planStartDate;
        this.planEndDate = planEndDate;
        this.amountDue = amountDue;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDlNumber() {
        return dlNumber;
    }

    public void setDlNumber(String dlNumber) {
        this.dlNumber = dlNumber;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Date getDlExpiryDate() {
        return dlExpiryDate;
    }

    public void setDlExpiryDate(Date dlExpiryDate) {
        this.dlExpiryDate = dlExpiryDate;
    }

    public String getIssueState() {
        return issueState;
    }

    public void setIssueState(String issueState) {
        this.issueState = issueState;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPlanId() {
        return planId;
    }

    public void setPlanId(String planId) {
        this.planId = planId;
    }

    public String getPlanType() {
        return planType;
    }

    public void setPlanType(String planType) {
        this.planType = planType;
    }

    public Date getPlanStartDate() {
        return planStartDate;
    }

    public void setPlanStartDate(Date planStartDate) {
        this.planStartDate = planStartDate;
    }

    public Date getPlanEndDate() {
        return planEndDate;
    }

    public void setPlanEndDate(Date planEndDate) {
        this.planEndDate = planEndDate;
    }

    public float getAmountDue() {
        return amountDue;
    }

    public void setAmountDue(float amountDue) {
        this.amountDue = amountDue;
    }

    @Override
    public String toString() {
        return "Account{" +
                "customerId='" + customerId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", dlNumber='" + dlNumber + '\'' +
                ", phone='" + phone + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", dlExpiryDate=" + dlExpiryDate +
                ", issueState='" + issueState + '\'' +
                ", accountId='" + accountId + '\'' +
                ", isActive='" + isActive + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", planId='" + planId + '\'' +
                ", planType='" + planType + '\'' +
                ", planStartDate=" + planStartDate +
                ", planEndDate=" + planEndDate +
                ", amountDue=" + amountDue +
                '}';
    }
}
