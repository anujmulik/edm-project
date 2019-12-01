package com.avengers.zipcar.entity;

import java.sql.Date;

public class Chauffeur extends Employee {

    private String dlNumber;
    private Date expiryDate;
    private String issuingState;

    public Chauffeur(String employeeId, String firstName, String lastName, String type, String dlNumber, Date expiryDate, String issuingState) {
        super(employeeId, firstName, lastName, type);
        this.dlNumber = dlNumber;
        this.expiryDate = expiryDate;
        this.issuingState = issuingState;
    }

    public String getDlNumber() {
        return dlNumber;
    }

    public void setDlNumber(String dlNumber) {
        this.dlNumber = dlNumber;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getIssuingState() {
        return issuingState;
    }

    public void setIssuingState(String issuingState) {
        this.issuingState = issuingState;
    }

    @Override
    public String toString() {
        return "Chauffeur{" +
                "dlNumber='" + dlNumber + '\'' +
                ", expiryDate=" + expiryDate +
                ", issuingState='" + issuingState + '\'' +
                '}';
    }
}
