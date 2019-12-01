package com.avengers.zipcar.entity;

public class Query3 {

    private String segment;
    private int carsInSegment;
    private int modelsInSegment;
    private int typeInSegment;
    private float totalRevenue;
    private int numberOfRegions;
    private int maxBookingsInAMonth;
    private int numTimesServiced;

    public Query3(String segment, int carsInSegment, int modelsInSegment, int typeInSegment, float totalRevenue, int numberOfRegions, int maxBookingsInAMonth, int numTimesServiced) {
        this.segment = segment;
        this.carsInSegment = carsInSegment;
        this.modelsInSegment = modelsInSegment;
        this.typeInSegment = typeInSegment;
        this.totalRevenue = totalRevenue;
        this.numberOfRegions = numberOfRegions;
        this.maxBookingsInAMonth = maxBookingsInAMonth;
        this.numTimesServiced = numTimesServiced;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    public int getCarsInSegment() {
        return carsInSegment;
    }

    public void setCarsInSegment(int carsInSegment) {
        this.carsInSegment = carsInSegment;
    }

    public int getModelsInSegment() {
        return modelsInSegment;
    }

    public void setModelsInSegment(int modelsInSegment) {
        this.modelsInSegment = modelsInSegment;
    }

    public int getTypeInSegment() {
        return typeInSegment;
    }

    public void setTypeInSegment(int typeInSegment) {
        this.typeInSegment = typeInSegment;
    }

    public float getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(float totalRevenue) {
        this.totalRevenue = totalRevenue;
    }

    public int getNumberOfRegions() {
        return numberOfRegions;
    }

    public void setNumberOfRegions(int numberOfRegions) {
        this.numberOfRegions = numberOfRegions;
    }

    public int getMaxBookingsInAMonth() {
        return maxBookingsInAMonth;
    }

    public void setMaxBookingsInAMonth(int maxBookingsInAMonth) {
        this.maxBookingsInAMonth = maxBookingsInAMonth;
    }

    public int getNumTimesServiced() {
        return numTimesServiced;
    }

    public void setNumTimesServiced(int numTimesServiced) {
        this.numTimesServiced = numTimesServiced;
    }

    @Override
    public String toString() {
        return "Query3{" +
                "segment='" + segment + '\'' +
                ", carsInSegment=" + carsInSegment +
                ", modelsInSegment=" + modelsInSegment +
                ", typeInSegment=" + typeInSegment +
                ", totalRevenue=" + totalRevenue +
                ", numberOfRegions=" + numberOfRegions +
                ", maxBookingsInAMonth=" + maxBookingsInAMonth +
                ", numTimesServiced=" + numTimesServiced +
                '}';
    }
}
