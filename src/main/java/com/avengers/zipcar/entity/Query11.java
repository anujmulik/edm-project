package com.avengers.zipcar.entity;

public class Query11 {
    private String ticketNumber;
    private float resolutionTime;
    private float difference;
    private float sla;
    private float resolutionStatus;
    private String isReassigned;
    private String isEscalated;

    public Query11(String ticketNumber, float resolutionTime, float difference, float sla, float resolutionStatus, String isReassigned, String isEscalated) {
        this.ticketNumber = ticketNumber;
        this.resolutionTime = resolutionTime;
        this.difference = difference;
        this.sla = sla;
        this.resolutionStatus = resolutionStatus;
        this.isReassigned = isReassigned;
        this.isEscalated = isEscalated;
    }

    public String getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(String ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public float getResolutionTime() {
        return resolutionTime;
    }

    public void setResolutionTime(float resolutionTime) {
        this.resolutionTime = resolutionTime;
    }

    public float getDifference() {
        return difference;
    }

    public void setDifference(float difference) {
        this.difference = difference;
    }

    public float getSla() {
        return sla;
    }

    public void setSla(float sla) {
        this.sla = sla;
    }

    public float getResolutionStatus() {
        return resolutionStatus;
    }

    public void setResolutionStatus(float resolutionStatus) {
        this.resolutionStatus = resolutionStatus;
    }

    public String getIsReassigned() {
        return isReassigned;
    }

    public void setIsReassigned(String isReassigned) {
        this.isReassigned = isReassigned;
    }

    public String getIsEscalated() {
        return isEscalated;
    }

    public void setIsEscalated(String isEscalated) {
        this.isEscalated = isEscalated;
    }

    @Override
    public String toString() {
        return "Query11{" +
                "ticketNumber='" + ticketNumber + '\'' +
                ", resolutionTime=" + resolutionTime +
                ", difference=" + difference +
                ", sla=" + sla +
                ", resolutionStatus=" + resolutionStatus +
                ", isReassigned='" + isReassigned + '\'' +
                ", isEscalated='" + isEscalated + '\'' +
                '}';
    }
}
