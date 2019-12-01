package com.avengers.zipcar.entity;

public class Query8 {

    private String segment;
    private float averageBookingPrice;
    private float averageLabourCost;
    private float averageEquipmentCost;
    private float averageServiceCost;
    private float percentageLabourCost;
    private float percentageEquipmentCost;
    private float rateOfReturn;

    public Query8(String segment, float averageBookingPrice, float averageLabourCost, float averageEquipmentCost, float averageServiceCost, float percentageLabourCost, float percentageEquipmentCost, float rateOfReturn) {
        this.segment = segment;
        this.averageBookingPrice = averageBookingPrice;
        this.averageLabourCost = averageLabourCost;
        this.averageEquipmentCost = averageEquipmentCost;
        this.averageServiceCost = averageServiceCost;
        this.percentageLabourCost = percentageLabourCost;
        this.percentageEquipmentCost = percentageEquipmentCost;
        this.rateOfReturn = rateOfReturn;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    public float getAverageBookingPrice() {
        return averageBookingPrice;
    }

    public void setAverageBookingPrice(float averageBookingPrice) {
        this.averageBookingPrice = averageBookingPrice;
    }

    public float getAverageLabourCost() {
        return averageLabourCost;
    }

    public void setAverageLabourCost(float averageLabourCost) {
        this.averageLabourCost = averageLabourCost;
    }

    public float getAverageEquipmentCost() {
        return averageEquipmentCost;
    }

    public void setAverageEquipmentCost(float averageEquipmentCost) {
        this.averageEquipmentCost = averageEquipmentCost;
    }

    public float getAverageServiceCost() {
        return averageServiceCost;
    }

    public void setAverageServiceCost(float averageServiceCost) {
        this.averageServiceCost = averageServiceCost;
    }

    public float getPercentageLabourCost() {
        return percentageLabourCost;
    }

    public void setPercentageLabourCost(float percentageLabourCost) {
        this.percentageLabourCost = percentageLabourCost;
    }

    public float getPercentageEquipmentCost() {
        return percentageEquipmentCost;
    }

    public void setPercentageEquipmentCost(float percentageEquipmentCost) {
        this.percentageEquipmentCost = percentageEquipmentCost;
    }

    public float getRateOfReturn() {
        return rateOfReturn;
    }

    public void setRateOfReturn(float rateOfReturn) {
        this.rateOfReturn = rateOfReturn;
    }

    @Override
    public String toString() {
        return "Query8{" +
                "segment='" + segment + '\'' +
                ", averageBookingPrice=" + averageBookingPrice +
                ", averageLabourCost=" + averageLabourCost +
                ", averageEquipmentCost=" + averageEquipmentCost +
                ", averageServiceCost=" + averageServiceCost +
                ", percentageLabourCost=" + percentageLabourCost +
                ", percentageEquipmentCost=" + percentageEquipmentCost +
                ", rateOfReturn=" + rateOfReturn +
                '}';
    }
}
