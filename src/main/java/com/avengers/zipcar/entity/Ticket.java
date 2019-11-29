package com.avengers.zipcar.entity;

import java.sql.Timestamp;

public class Ticket {
    private String employeeId;
    private String ticketNumber;
    private String description;
    private String currentStatus;
    private String severity;
    private Timestamp creationDate;
    private Timestamp resolutionDate;
    private String accountId;
    private String issueTypeId;
    private String bookingId;

    public Ticket(String employeeId, String ticketNumber, String description, String currentStatus, String severity, Timestamp creationDate, Timestamp resolutionDate, String accountId, String issueTypeId, String bookingId) {
        this.employeeId = employeeId;
        this.ticketNumber = ticketNumber;
        this.description = description;
        this.currentStatus = currentStatus;
        this.severity = severity;
        this.creationDate = creationDate;
        this.resolutionDate = resolutionDate;
        this.accountId = accountId;
        this.issueTypeId = issueTypeId;
        this.bookingId = bookingId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(String ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCurrentStatus() {
        return currentStatus;
    }

    public void setCurrentStatus(String currentStatus) {
        this.currentStatus = currentStatus;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Timestamp creationDate) {
        this.creationDate = creationDate;
    }

    public Timestamp getResolutionDate() {
        return resolutionDate;
    }

    public void setResolutionDate(Timestamp resolutionDate) {
        this.resolutionDate = resolutionDate;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getIssueTypeId() {
        return issueTypeId;
    }

    public void setIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "employeeId='" + employeeId + '\'' +
                ", ticketNumber='" + ticketNumber + '\'' +
                ", description='" + description + '\'' +
                ", currentStatus='" + currentStatus + '\'' +
                ", severity='" + severity + '\'' +
                ", creationDate=" + creationDate +
                ", resolutionDate=" + resolutionDate +
                ", accountId='" + accountId + '\'' +
                ", issueTypeId='" + issueTypeId + '\'' +
                ", bookingId='" + bookingId + '\'' +
                '}';
    }
}
