package com.avengers.zipcar.entity;


public class IssueType {
    private String issueTypeId;
    private String sla;
    private String name;

    public IssueType(String issueTypeId, String sla, String name) {
        this.issueTypeId = issueTypeId;
        this.sla = sla;
        this.name = name;
    }

    public String getIssueTypeId() {
        return issueTypeId;
    }

    public void setIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
    }

    public String getSla() {
        return sla;
    }

    public void setSla(String sla) {
        this.sla = sla;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "IssueType{" +
                "issueTypeId='" + issueTypeId + '\'' +
                ", sla='" + sla + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
