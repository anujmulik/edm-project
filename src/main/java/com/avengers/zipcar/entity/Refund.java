package com.avengers.zipcar.entity;

import java.sql.Timestamp;

public class Refund {
    private String bookingId;
    private float amount;
    private Status status;
    private String reason;
    private Timestamp refundTimestamp;
    private int instance;

    public Refund(String bookingId, float amount, Status status, String reason, Timestamp refundTimestamp, int instance) {
        this.bookingId = bookingId;
        this.amount = amount;
        this.status = status;
        this.reason = reason;
        this.refundTimestamp = refundTimestamp;
        this.instance = instance;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Timestamp getRefundTimestamp() {
        return refundTimestamp;
    }

    public void setRefundTimestamp(Timestamp refundTimestamp) {
        this.refundTimestamp = refundTimestamp;
    }

    public int getInstance() {
        return instance;
    }

    public void setInstance(int instance) {
        this.instance = instance;
    }

    @Override
    public String toString() {
        return "Refund{" +
                "bookingId='" + bookingId + '\'' +
                ", amount=" + amount +
                ", status=" + status +
                ", reason='" + reason + '\'' +
                ", refundTimestamp=" + refundTimestamp +
                ", instance=" + instance +
                '}';
    }

    public enum Status {
        INITIATED, APPROVED, DECLINED
    }
}
