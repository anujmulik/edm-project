package com.avengers.zipcar.entity;

public class Query7 {
    private String accountId;
    private float totalBaseBookingAmount;
    private float totalPlanDiscount;
    private float totalPromocodeDiscount;
    private float totalSavings;

    public Query7(String accountId, float totalBaseBookingAmount, float totalPlanDiscount, float totalPromocodeDiscount, float totalSavings) {
        this.accountId = accountId;
        this.totalBaseBookingAmount = totalBaseBookingAmount;
        this.totalPlanDiscount = totalPlanDiscount;
        this.totalPromocodeDiscount = totalPromocodeDiscount;
        this.totalSavings = totalSavings;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public float getTotalBaseBookingAmount() {
        return totalBaseBookingAmount;
    }

    public void setTotalBaseBookingAmount(float totalBaseBookingAmount) {
        this.totalBaseBookingAmount = totalBaseBookingAmount;
    }

    public float getTotalPlanDiscount() {
        return totalPlanDiscount;
    }

    public void setTotalPlanDiscount(float totalPlanDiscount) {
        this.totalPlanDiscount = totalPlanDiscount;
    }

    public float getTotalPromocodeDiscount() {
        return totalPromocodeDiscount;
    }

    public void setTotalPromocodeDiscount(float totalPromocodeDiscount) {
        this.totalPromocodeDiscount = totalPromocodeDiscount;
    }

    public float getTotalSavings() {
        return totalSavings;
    }

    public void setTotalSavings(float totalSavings) {
        this.totalSavings = totalSavings;
    }

    @Override
    public String toString() {
        return "Query7{" +
                "accountId='" + accountId + '\'' +
                ", totalBaseBookingAmount=" + totalBaseBookingAmount +
                ", totalPlanDiscount=" + totalPlanDiscount +
                ", totalPromocodeDiscount=" + totalPromocodeDiscount +
                ", totalSavings=" + totalSavings +
                '}';
    }
}
