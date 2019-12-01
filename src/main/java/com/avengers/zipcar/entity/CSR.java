package com.avengers.zipcar.entity;

public class CSR extends Employee {

    private String shiftDetails;
    private String emailId;
    private String escalationContact;
    private String escalationContactName;

    public CSR(String employeeId, String firstName, String lastName, String type, String shiftDetails, String emailId, String escalationContact, String escalationContactName) {
        super(employeeId, firstName, lastName, type);
        this.shiftDetails = shiftDetails;
        this.emailId = emailId;
        this.escalationContact = escalationContact;
        this.escalationContactName = escalationContactName;
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

    public String getEscalationContactName() {
        return escalationContactName;
    }

    public void setEscalationContactName(String escalationContactName) {
        this.escalationContactName = escalationContactName;
    }

    @Override
    public String toString() {
        return "CSR{" +
                "shiftDetails='" + shiftDetails + '\'' +
                ", emailId='" + emailId + '\'' +
                ", escalationContact='" + escalationContact + '\'' +
                ", escalationContactName='" + escalationContactName + '\'' +
                '}';
    }
}
