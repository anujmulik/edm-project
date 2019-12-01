package com.avengers.zipcar.entity;

public class Query12 {
    private String issueTypeId;
    private float noOfPeopleWhoCanResolve;
    private String employeeId;
    private String employeeNames;
    private float resolutionStatus;
    private int numResolved;

    public Query12(String issueTypeId, float noOfPeopleWhoCanResolve, String employeeId, String employeeNames, float resolutionStatus, int numResolved) {
        this.issueTypeId = issueTypeId;
        this.noOfPeopleWhoCanResolve = noOfPeopleWhoCanResolve;
        this.employeeId = employeeId;
        this.employeeNames = employeeNames;
        this.resolutionStatus = resolutionStatus;
        this.numResolved = numResolved;
    }

    public String getIssueTypeId() {
        return issueTypeId;
    }

    public void setIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
    }

    public float getNoOfPeopleWhoCanResolve() {
        return noOfPeopleWhoCanResolve;
    }

    public void setNoOfPeopleWhoCanResolve(float noOfPeopleWhoCanResolve) {
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

    public float getResolutionStatus() {
        return resolutionStatus;
    }

    public void setResolutionStatus(float resolutionStatus) {
        this.resolutionStatus = resolutionStatus;
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
                ", resolutionStatus=" + resolutionStatus +
                ", numResolved=" + numResolved +
                '}';
    }
}
