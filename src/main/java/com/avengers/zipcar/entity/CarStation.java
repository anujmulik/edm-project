package com.avengers.zipcar.entity;

public class CarStation {

    private String stationId;
    private String streetAddress;
    private String regionId;
    private String zipcode;

    public CarStation(String stationId, String streetAddress, String regionId, String zipcode) {
        this.stationId = stationId;
        this.streetAddress = streetAddress;
        this.regionId = regionId;
        this.zipcode = zipcode;
    }

    public String getStationId() {
        return stationId;
    }

    public void setStationId(String stationId) {
        this.stationId = stationId;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getRegionId() {
        return regionId;
    }

    public void setRegionId(String regionId) {
        this.regionId = regionId;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "CarStation{" +
                "stationId='" + stationId + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", regionId='" + regionId + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}
