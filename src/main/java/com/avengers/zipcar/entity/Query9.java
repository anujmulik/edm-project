package com.avengers.zipcar.entity;

public class Query9 {
    private String state;
    private String category;
    private float noOfBookings;
    private float totalFines;

    public Query9(String state, String category, float noOfBookings, float totalFines) {
        this.state = state;
        this.category = category;
        this.noOfBookings = noOfBookings;
        this.totalFines = totalFines;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public float getNoOfBookings() {
        return noOfBookings;
    }

    public void setNoOfBookings(float noOfBookings) {
        this.noOfBookings = noOfBookings;
    }

    public float getTotalFines() {
        return totalFines;
    }

    public void setTotalFines(float totalFines) {
        this.totalFines = totalFines;
    }

    @Override
    public String toString() {
        return "Query9{" +
                "state='" + state + '\'' +
                ", category='" + category + '\'' +
                ", noOfBookings=" + noOfBookings +
                ", totalFines=" + totalFines +
                '}';
    }
}
