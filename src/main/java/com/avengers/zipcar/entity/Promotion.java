package com.avengers.zipcar.entity;

import java.sql.Date;

public class Promotion {

    private String promocode;
    private int discountValue;
    private Date effectiveFrom;
    private Date expiryDate;
    private String discountType;

    public Promotion(String promocode, int discountValue, Date effectiveFrom, Date expiryDate, String discountType) {
        this.promocode = promocode;
        this.discountValue = discountValue;
        this.effectiveFrom = effectiveFrom;
        this.expiryDate = expiryDate;
        this.discountType = discountType;
    }

    public String getPromocode() {
        return promocode;
    }

    public void setPromocode(String promocode) {
        this.promocode = promocode;
    }

    public int getDiscountValue() {
        return discountValue;
    }

    public void setDiscountValue(int discountValue) {
        this.discountValue = discountValue;
    }

    public Date getEffectiveFrom() {
        return effectiveFrom;
    }

    public void setEffectiveFrom(Date effectiveFrom) {
        this.effectiveFrom = effectiveFrom;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getDiscountType() {
        return discountType;
    }

    public void setDiscountType(String discountType) {
        this.discountType = discountType;
    }

    @Override
    public String toString() {
        return "Promocode{" +
                "promocode='" + promocode + '\'' +
                ", discountValue=" + discountValue +
                ", effectiveFrom=" + effectiveFrom +
                ", expiryDate=" + expiryDate +
                ", discountType='" + discountType + '\'' +
                '}';
    }
}