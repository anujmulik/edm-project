package com.avengers.zipcar.entity;

public class Query2 {

    private String employeeId;
    private int noOfTickets;
    private int noOfTicketsUnderManager;
    private String currentStatus;
    private String severity;

    public Query2(String employeeId, int noOfTickets, int noOfTicketsUnderManager, String currentStatus, String severity) {
        this.employeeId = employeeId;
        this.noOfTickets = noOfTickets;
        this.noOfTicketsUnderManager = noOfTicketsUnderManager;
        this.currentStatus = currentStatus;
        this.severity = severity;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public int getNoOfTickets() {
        return noOfTickets;
    }

    public void setNoOfTickets(int noOfTickets) {
        this.noOfTickets = noOfTickets;
    }

    public int getNoOfTicketsUnderManager() {
        return noOfTicketsUnderManager;
    }

    public void setNoOfTicketsUnderManager(int noOfTicketsUnderManager) {
        this.noOfTicketsUnderManager = noOfTicketsUnderManager;
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

    @Override
    public String toString() {
        return "Query2{" +
                "employeeId='" + employeeId + '\'' +
                ", noOfTickets=" + noOfTickets +
                ", noOfTicketsUnderManager=" + noOfTicketsUnderManager +
                ", currentStatus='" + currentStatus + '\'' +
                ", severity='" + severity + '\'' +
                '}';
    }
}
