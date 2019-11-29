package com.avengers.zipcar.entity;

import java.sql.Date;
public class ServiceCentre {

    private String CentreId;
    private String Country;
    private String Zipcode;
    private String City;
    private String StreetAddress;
    private String State;

    public ServiceCentre(String centreId, String country, String zipcode, String city, String streetAddress, String state) {
        CentreId = centreId;
        Country = country;
        Zipcode = zipcode;
        City = city;
        StreetAddress = streetAddress;
        State = state;
    }

    public String getCentreId() {
        return CentreId;
    }

    public void setCentreId(String centreId) {
        CentreId = centreId;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getZipcode() {
        return Zipcode;
    }

    public void setZipcode(String zipcode) {
        Zipcode = zipcode;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getStreetAddress() {
        return StreetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        StreetAddress = streetAddress;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    @Override
    public String toString() {
        return "ServiceCentre{" +
                "CentreId='" + CentreId + '\'' +
                ", Country='" + Country + '\'' +
                ", Zipcode='" + Zipcode + '\'' +
                ", City='" + City + '\'' +
                ", StreetAddress='" + StreetAddress + '\'' +
                ", State='" + State + '\'' +
                '}';
    }
}
