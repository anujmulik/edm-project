package com.avengers.zipcar.entity;

import java.sql.Timestamp;

public class Car {

    private String vin;
    private int nooOfSeats;
    private String year;
    private String type;
    private String model;
    private String segment;
    private String registrationNo;
    private String color;
    private String make;
    private String policyNo;
    private String regionId;
    private Timestamp nextDue;

    public Car(String vin, int nooOfSeats, String year, String type, String model, String segment, String registrationNo, String color, String make, String policyNo, String regionId, Timestamp nextDue) {
        this.vin = vin;
        this.nooOfSeats = nooOfSeats;
        this.year = year;
        this.type = type;
        this.model = model;
        this.segment = segment;
        this.registrationNo = registrationNo;
        this.color = color;
        this.make = make;
        this.policyNo = policyNo;
        this.regionId = regionId;
        this.nextDue = nextDue;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public int getNooOfSeats() {
        return nooOfSeats;
    }

    public void setNooOfSeats(int nooOfSeats) {
        this.nooOfSeats = nooOfSeats;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    public String getRegistrationNo() {
        return registrationNo;
    }

    public void setRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getPolicyNo() {
        return policyNo;
    }

    public void setPolicyNo(String policyNo) {
        this.policyNo = policyNo;
    }

    public String getRegionId() {
        return regionId;
    }

    public void setRegionId(String regionId) {
        this.regionId = regionId;
    }

    public Timestamp getNextDue() {
        return nextDue;
    }

    public void setNextDue(Timestamp nextDue) {
        this.nextDue = nextDue;
    }

    @Override
    public String toString() {
        return "Car{" +
                "vin='" + vin + '\'' +
                ", nooOfSeats=" + nooOfSeats +
                ", year='" + year + '\'' +
                ", type='" + type + '\'' +
                ", model='" + model + '\'' +
                ", segment='" + segment + '\'' +
                ", registrationNo='" + registrationNo + '\'' +
                ", color='" + color + '\'' +
                ", make='" + make + '\'' +
                ", policyNo='" + policyNo + '\'' +
                ", regionId='" + regionId + '\'' +
                ", nextDue=" + nextDue +
                '}';
    }
}
