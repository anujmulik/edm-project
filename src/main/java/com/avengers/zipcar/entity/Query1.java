package com.avengers.zipcar.entity;

public class Query1 {

    private String period;
    private int noOfBookings;
    private int lastYearBookings;
    private int nextMonthsBookings;
    private int annualChange;
    private int monthlyChange;
    private int ytdBookings;

    public Query1(String period, int noOfBookings, int lastYearBookings, int nextMonthsBookings, int annualChange, int monthlyChange, int ytdBookings) {
        this.period = period;
        this.noOfBookings = noOfBookings;
        this.lastYearBookings = lastYearBookings;
        this.nextMonthsBookings = nextMonthsBookings;
        this.annualChange = annualChange;
        this.monthlyChange = monthlyChange;
        this.ytdBookings = ytdBookings;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public int getNoOfBookings() {
        return noOfBookings;
    }

    public void setNoOfBookings(int noOfBookings) {
        this.noOfBookings = noOfBookings;
    }

    public int getLastYearBookings() {
        return lastYearBookings;
    }

    public void setLastYearBookings(int lastYearBookings) {
        this.lastYearBookings = lastYearBookings;
    }

    public int getNextMonthsBookings() {
        return nextMonthsBookings;
    }

    public void setNextMonthsBookings(int nextMonthsBookings) {
        this.nextMonthsBookings = nextMonthsBookings;
    }

    public int getAnnualChange() {
        return annualChange;
    }

    public void setAnnualChange(int annualChange) {
        this.annualChange = annualChange;
    }

    public int getMonthlyChange() {
        return monthlyChange;
    }

    public void setMonthlyChange(int monthlyChange) {
        this.monthlyChange = monthlyChange;
    }

    public int getYtdBookings() {
        return ytdBookings;
    }

    public void setYtdBookings(int ytdBookings) {
        this.ytdBookings = ytdBookings;
    }

    @Override
    public String toString() {
        return "Query1{" +
                "period='" + period + '\'' +
                ", noOfBookings=" + noOfBookings +
                ", lastYearBookings=" + lastYearBookings +
                ", nextMonthsBookings=" + nextMonthsBookings +
                ", annualChange=" + annualChange +
                ", monthlyChange=" + monthlyChange +
                ", ytdBookings=" + ytdBookings +
                '}';
    }
}



