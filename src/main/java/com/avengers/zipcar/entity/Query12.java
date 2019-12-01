package com.avengers.zipcar.entity;

public class Query12 {
    private String issueTypeId;
    private int noOfPeopleWhoCanResolve;
    private String employeeId;
    private String employeeNames;
    private int numResolved;

    public Query12(String issueTypeId, int noOfPeopleWhoCanResolve, String employeeId, String employeeNames, int numResolved) {
        this.issueTypeId = issueTypeId;
        this.noOfPeopleWhoCanResolve = noOfPeopleWhoCanResolve;
        this.employeeId = employeeId;
        this.employeeNames = employeeNames;
        this.numResolved = numResolved;
    }

    public String getIssueTypeId() {
        return issueTypeId;
    }

    public void setIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
    }

    public int getNoOfPeopleWhoCanResolve() {
        return noOfPeopleWhoCanResolve;
    }

    public void setNoOfPeopleWhoCanResolve(int noOfPeopleWhoCanResolve) {
        this.noOfPeopleWhoCanResolve = noOfPeopleWhoCanResolve;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeNames() {
        return employeeNames;
    }

    public void setEmployeeNames(String employeeNames) {
        this.employeeNames = employeeNames;
    }

    public int getNumResolved() {
        return numResolved;
    }

    public void setNumResolved(int numResolved) {
        this.numResolved = numResolved;
    }

    @Override
    public String toString() {
        return "Query12{" +
                "issueTypeId='" + issueTypeId + '\'' +
                ", noOfPeopleWhoCanResolve=" + noOfPeopleWhoCanResolve +
                ", employeeId='" + employeeId + '\'' +
                ", employeeNames='" + employeeNames + '\'' +
                ", numResolved=" + numResolved +
                '}';
    }
}
