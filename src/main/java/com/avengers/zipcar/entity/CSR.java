package com.avengers.zipcar.entity;

public class CSR extends Employee {

    private String shiftDetails;
    private String emailId;
    private String escalationContact;

    public CSR(String employeeId, String firstName, String lastName, String type, String shiftDetails, String emailId, String escalationContact) {
        super(employeeId, firstName, lastName, type);
        this.shiftDetails = shiftDetails;
        this.emailId = emailId;
        this.escalationContact = escalationContact;
    }

    public String getShiftDetails() {
        return shiftDetails;
    }

    public void setShiftDetails(String shiftDetails) {
        this.shiftDetails = shiftDetails;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getEscalationContact() {
        return escalationContact;
    }

    public void setEscalationContact(String escalationContact) {
        this.escalationContact = escalationContact;
    }

    @Override
    public String toString() {
        return "CSR{" +
                "shiftDetails='" + shiftDetails + '\'' +
                ", emailId='" + emailId + '\'' +
                ", escalationContact='" + escalationContact + '\'' +
                '}';
    }
}
