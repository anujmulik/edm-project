package com.avengers.zipcar.entity;

public class Query5 {

    private String states;
    private int numOfRegions;
    private int numOfChauffers;
    private int numOfCars;
    private int numCarStations;
    private int numOfServiceCenters;
    private int numOfCustomers;

    public Query5(String states, int numOfRegions, int numOfChauffers, int numOfCars, int numCarStations, int numOfServiceCenters, int numOfCustomers) {
        this.states = states;
        this.numOfRegions = numOfRegions;
        this.numOfChauffers = numOfChauffers;
        this.numOfCars = numOfCars;
        this.numCarStations = numCarStations;
        this.numOfServiceCenters = numOfServiceCenters;
        this.numOfCustomers = numOfCustomers;
    }

    public String getStates() {
        return states;
    }

    public void setStates(String states) {
        this.states = states;
    }

    public int getNumOfRegions() {
        return numOfRegions;
    }

    public void setNumOfRegions(int numOfRegions) {
        this.numOfRegions = numOfRegions;
    }

    public int getNumOfChauffers() {
        return numOfChauffers;
    }

    public void setNumOfChauffers(int numOfChauffers) {
        this.numOfChauffers = numOfChauffers;
    }

    public int getNumOfCars() {
        return numOfCars;
    }

    public void setNumOfCars(int numOfCars) {
        this.numOfCars = numOfCars;
    }

    public int getNumCarStations() {
        return numCarStations;
    }

    public void setNumCarStations(int numCarStations) {
        this.numCarStations = numCarStations;
    }

    public int getNumOfServiceCenters() {
        return numOfServiceCenters;
    }

    public void setNumOfServiceCenters(int numOfServiceCenters) {
        this.numOfServiceCenters = numOfServiceCenters;
    }

    public int getNumOfCustomers() {
        return numOfCustomers;
    }

    public void setNumOfCustomers(int numOfCustomers) {
        this.numOfCustomers = numOfCustomers;
    }

    @Override
    public String toString() {
        return "Query5{" +
                "states='" + states + '\'' +
                ", numOfRegions=" + numOfRegions +
                ", numOfChauffers=" + numOfChauffers +
                ", numOfCars=" + numOfCars +
                ", numCarStations=" + numCarStations +
                ", numOfServiceCenters=" + numOfServiceCenters +
                ", numOfCustomers=" + numOfCustomers +
                '}';
    }
}
