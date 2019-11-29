package com.avengers.zipcar.entity;

import java.sql.Date;

public class InsurancePolicy {

    private String policyNo;
    private Date expiryDate;
    private Date issueDate;
    private float termPrice;
    private float premium;

    public InsurancePolicy(String policyNo, Date expiryDate, Date issueDate, float termPrice, float premium) {
        this.policyNo = policyNo;
        this.expiryDate = expiryDate;
        this.issueDate = issueDate;
        this.termPrice = termPrice;
        this.premium = premium;
    }

    public String getPolicyNo() {
        return policyNo;
    }

    public void setPolicyNo(String policyNo) {
        this.policyNo = policyNo;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public float getTermPrice() {
        return termPrice;
    }

    public void setTermPrice(float termPrice) {
        this.termPrice = termPrice;
    }

    public float getPremium() {
        return premium;
    }

    public void setPremium(float premium) {
        this.premium = premium;
    }

    @Override
    public String toString() {
        return "InsurancePolicy{" +
                "policyNo='" + policyNo + '\'' +
                ", expiryDate=" + expiryDate +
                ", issueDate=" + issueDate +
                ", termPrice=" + termPrice +
                ", premium=" + premium +
                '}';
    }
}
