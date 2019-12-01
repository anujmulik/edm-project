package com.avengers.zipcar.entity;

public class Query4 {

    private String firstName;
    private String lastName;
    private String customerId;
    private int totalNumBookings;
    private String segment;
    private float totalDistanceTravelled;
    private float totalFines;
    private int numSegmentBooked;
    private String customerType;

    public Query4(String firstName, String lastName, String customerId, int totalNumBookings, String segment, float totalDistanceTravelled, float totalFines, int numSegmentBooked, String customerType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerId = customerId;
        this.totalNumBookings = totalNumBookings;
        this.segment = segment;
        this.totalDistanceTravelled = totalDistanceTravelled;
        this.totalFines = totalFines;
        this.numSegmentBooked = numSegmentBooked;
        this.customerType = customerType;
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

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public int getTotalNumBookings() {
        return totalNumBookings;
    }

    public void setTotalNumBookings(int totalNumBookings) {
        this.totalNumBookings = totalNumBookings;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    public float getTotalDistanceTravelled() {
        return totalDistanceTravelled;
    }

    public void setTotalDistanceTravelled(float totalDistanceTravelled) {
        this.totalDistanceTravelled = totalDistanceTravelled;
    }

    public float getTotalFines() {
        return totalFines;
    }

    public void setTotalFines(float totalFines) {
        this.totalFines = totalFines;
    }

    public int getNumSegmentBooked() {
        return numSegmentBooked;
    }

    public void setNumSegmentBooked(int numSegmentBooked) {
        this.numSegmentBooked = numSegmentBooked;
    }

    public String getCustomerType() {
        return customerType;
    }

    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    @Override
    public String toString() {
        return "Query4{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", customerId='" + customerId + '\'' +
                ", totalNumBookings=" + totalNumBookings +
                ", segment='" + segment + '\'' +
                ", totalDistanceTravelled=" + totalDistanceTravelled +
                ", totalFines=" + totalFines +
                ", numSegmentBooked=" + numSegmentBooked +
                ", customerType='" + customerType + '\'' +
                '}';
    }
}
