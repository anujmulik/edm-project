package com.avengers.zipcar.entity;

import java.sql.Timestamp;

public class Booking {

    private String bookingId;
    private float dropLocationLat;
    private float pickupLocationLat;
    private float dropLocationLong;
    private float pickupLocationLong;

    private Timestamp bookingTime;
    private Timestamp startTime;
    private Timestamp endTime;
    private Timestamp actualEndTime;

    private String accountId;
    private String vin;
    private String promocode;
    private String pickupStationId;
    private String dropoffStationId;
    private String isChauffeurPickup;

    private Status status;
    private float fuel;
    private float totalDistanceTravelled;
    private float totalFines;
    private float baseBookingAmount;

    public enum Status {
        ENDED,IN_PROGRESS,CANCELLED, INITIATED
    }

    public Booking(String bookingId, float dropLocationLat, float pickupLocationLat, float dropLocationLong, float pickupLocationLong, Timestamp bookingTime, Timestamp startTime, Timestamp endTime, Timestamp actualEndTime, String accountId, String vin, String promocode, String pickupStationId, String dropoffStationId, String isChauffeurPickup, Status status, float fuel, float totalDistanceTravelled, float totalFines, float baseBookingAmount) {
        this.bookingId = bookingId;
        this.dropLocationLat = dropLocationLat;
        this.pickupLocationLat = pickupLocationLat;
        this.dropLocationLong = dropLocationLong;
        this.pickupLocationLong = pickupLocationLong;
        this.bookingTime = bookingTime;
        this.startTime = startTime;
        this.endTime = endTime;
        this.actualEndTime = actualEndTime;
        this.accountId = accountId;
        this.vin = vin;
        this.promocode = promocode;
        this.pickupStationId = pickupStationId;
        this.dropoffStationId = dropoffStationId;
        this.isChauffeurPickup = isChauffeurPickup;
        this.status = status;
        this.fuel = fuel;
        this.totalDistanceTravelled = totalDistanceTravelled;
        this.totalFines = totalFines;
        this.baseBookingAmount = baseBookingAmount;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public float getDropLocationLat() {
        return dropLocationLat;
    }

    public void setDropLocationLat(float dropLocationLat) {
        this.dropLocationLat = dropLocationLat;
    }

    public float getPickupLocationLat() {
        return pickupLocationLat;
    }

    public void setPickupLocationLat(float pickupLocationLat) {
        this.pickupLocationLat = pickupLocationLat;
    }

    public float getDropLocationLong() {
        return dropLocationLong;
    }

    public void setDropLocationLong(float dropLocationLong) {
        this.dropLocationLong = dropLocationLong;
    }

    public float getPickupLocationLong() {
        return pickupLocationLong;
    }

    public void setPickupLocationLong(float pickupLocationLong) {
        this.pickupLocationLong = pickupLocationLong;
    }

    public Timestamp getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(Timestamp bookingTime) {
        this.bookingTime = bookingTime;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    public Timestamp getActualEndTime() {
        return actualEndTime;
    }

    public void setActualEndTime(Timestamp actualEndTime) {
        this.actualEndTime = actualEndTime;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getPromocode() {
        return promocode;
    }

    public void setPromocode(String promocode) {
        this.promocode = promocode;
    }

    public String getPickupStationId() {
        return pickupStationId;
    }

    public void setPickupStationId(String pickupStationId) {
        this.pickupStationId = pickupStationId;
    }

    public String getDropoffStationId() {
        return dropoffStationId;
    }

    public void setDropoffStationId(String dropoffStationId) {
        this.dropoffStationId = dropoffStationId;
    }

    public String getIsChauffeurPickup() {
        return isChauffeurPickup;
    }

    public void setIsChauffeurPickup(String isChauffeurPickup) {
        this.isChauffeurPickup = isChauffeurPickup;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public float getFuel() {
        return fuel;
    }

    public void setFuel(float fuel) {
        this.fuel = fuel;
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

    public float getBaseBookingAmount() {
        return baseBookingAmount;
    }

    public void setBaseBookingAmount(float baseBookingAmount) {
        this.baseBookingAmount = baseBookingAmount;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "bookingId='" + bookingId + '\'' +
                ", dropLocationLat=" + dropLocationLat +
                ", pickupLocationLat=" + pickupLocationLat +
                ", dropLocationLong=" + dropLocationLong +
                ", pickupLocationLong=" + pickupLocationLong +
                ", bookingTime=" + bookingTime +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", actualEndTime=" + actualEndTime +
                ", accountId='" + accountId + '\'' +
                ", vin='" + vin + '\'' +
                ", promocode='" + promocode + '\'' +
                ", pickupStationId='" + pickupStationId + '\'' +
                ", dropoffStationId='" + dropoffStationId + '\'' +
                ", isChauffeurPickup='" + isChauffeurPickup + '\'' +
                ", status=" + status +
                ", fuel=" + fuel +
                ", totalDistanceTravelled=" + totalDistanceTravelled +
                ", totalFines=" + totalFines +
                ", baseBookingAmount=" + baseBookingAmount +
                '}';
    }
}
