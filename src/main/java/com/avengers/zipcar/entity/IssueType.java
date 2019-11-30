package com.avengers.zipcar.entity;


public class IssueType {
    private String sla;
    private String name;

    public IssueType(String sla, String name) {
        this.sla = sla;
        this.name = name;
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
                "sla='" + sla + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
