package com.avengers.zipcar.entity;

public class Query10 {
    private String customerId;
    private String firstName;
    private String lastName;
    private float chauffeurPickupCount;
    private float ticketsRaisedCount;
    private float majorTickets;
    private float minorTickets;
    private float criticalTickets;

    public Query10(String customerId, String firstName, String lastName, float chauffeurPickupCount, float ticketsRaisedCount, float majorTickets, float minorTickets, float criticalTickets) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.chauffeurPickupCount = chauffeurPickupCount;
        this.ticketsRaisedCount = ticketsRaisedCount;
        this.majorTickets = majorTickets;
        this.minorTickets = minorTickets;
        this.criticalTickets = criticalTickets;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public float getChauffeurPickupCount() {
        return chauffeurPickupCount;
    }

    public void setChauffeurPickupCount(float chauffeurPickupCount) {
        this.chauffeurPickupCount = chauffeurPickupCount;
    }

    public float getTicketsRaisedCount() {
        return ticketsRaisedCount;
    }

    public void setTicketsRaisedCount(float ticketsRaisedCount) {
        this.ticketsRaisedCount = ticketsRaisedCount;
    }

    public float getMajorTickets() {
        return majorTickets;
    }

    public void setMajorTickets(float majorTickets) {
        this.majorTickets = majorTickets;
    }

    public float getMinorTickets() {
        return minorTickets;
    }

    public void setMinorTickets(float minorTickets) {
        this.minorTickets = minorTickets;
    }

    public float getCriticalTickets() {
        return criticalTickets;
    }

    public void setCriticalTickets(float criticalTickets) {
        this.criticalTickets = criticalTickets;
    }

    @Override
    public String toString() {
        return "Query10{" +
                "customerId='" + customerId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", chauffeurPickupCount=" + chauffeurPickupCount +
                ", ticketsRaisedCount=" + ticketsRaisedCount +
                ", majorTickets=" + majorTickets +
                ", minorTickets=" + minorTickets +
                ", criticalTickets=" + criticalTickets +
                '}';
    }
}
