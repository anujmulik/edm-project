package com.avengers.zipcar.entity;

public class Plan {
    public enum Type {
        STUDENT,BUSINESS,OTHER
    }
    private Type type;
    private String planId;
    private String discountDuration;
    private String discountValue;
    private String discountType;
    private String accountType;

    public Plan(Type type, String planId, String discountDuration, String discountValue, String discountType, String accountType) {
        this.type = type;
        this.planId = planId;
        this.discountDuration = discountDuration;
        this.discountValue = discountValue;
        this.discountType = discountType;
        this.accountType = accountType;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getPlanId() {
        return planId;
    }

    public void setPlanId(String planId) {
        this.planId = planId;
    }

    public String getDiscountDuration() {
        return discountDuration;
    }

    public void setDiscountDuration(String discountDuration) {
        this.discountDuration = discountDuration;
    }

    public String getDiscountValue() {
        return discountValue;
    }

    public void setDiscountValue(String discountValue) {
        this.discountValue = discountValue;
    }

    public String getDiscountType() {
        return discountType;
    }

    public void setDiscountType(String discountType) {
        this.discountType = discountType;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    @Override
    public String toString() {
        return "Plan{" +
                "type=" + type +
                ", planId='" + planId + '\'' +
                ", discountDuration='" + discountDuration + '\'' +
                ", discountValue='" + discountValue + '\'' +
                ", discountType='" + discountType + '\'' +
                ", accountType='" + accountType + '\'' +
                '}';
    }
}
