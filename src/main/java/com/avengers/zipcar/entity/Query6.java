package com.avengers.zipcar.entity;

public class Query6 {

    private String state;
    private String mostPopularSegment;

    public Query6(String state, String mostPopularSegment) {
        this.state = state;
        this.mostPopularSegment = mostPopularSegment;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getMostPopularSegment() {
        return mostPopularSegment;
    }

    public void setMostPopularSegment(String mostPopularSegment) {
        this.mostPopularSegment = mostPopularSegment;
    }

    @Override
    public String toString() {
        return "Query6{" +
                "state='" + state + '\'' +
                ", mostPopularSegment='" + mostPopularSegment + '\'' +
                '}';
    }
}
