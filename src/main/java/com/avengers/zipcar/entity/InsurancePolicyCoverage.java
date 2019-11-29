package com.avengers.zipcar.entity;

public class InsurancePolicyCoverage {

   private String coverage;
   private String policyNo;

    public InsurancePolicyCoverage(String coverage, String policyNo) {
        this.coverage = coverage;
        this.policyNo = policyNo;
    }

    public String getCoverage() {
        return coverage;
    }

    public void setCoverage(String coverage) {
        this.coverage = coverage;
    }

    public String getPolicyNo() {
        return policyNo;
    }

    public void setPolicyNo(String policyNo) {
        this.policyNo = policyNo;
    }

    @Override
    public String toString() {
        return "InsurancePolicyCoverage{" +
                "coverage='" + coverage + '\'' +
                ", policyNo='" + policyNo + '\'' +
                '}';
    }
}
