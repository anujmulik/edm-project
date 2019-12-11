package com.avengers.zipcar.entity;

public class Fines {


    private String bookingId;
    private Category category;
    private int instance;
    private float price;
    private String description;

    public Fines(String bookingId, String category, int instance, float price, String description) {
        this.bookingId = bookingId;
        this.category = Category.valueOf(category);
        this.instance = instance;
        this.price = price;
        this.description = description;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public String getCategory() {
        return category.toString();
    }

    public void setCategory(String category) {
        this.category = Category.valueOf(category);
    }

    public int getInstance() {
        return instance;
    }

    public void setInstance(int instance) {
        this.instance = instance;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Fines{" +
                "bookingId='" + bookingId + '\'' +
                ", category=" + category +
                ", instance=" + instance +
                ", price=" + price +
                ", description='" + description + '\'' +
                '}';
    }

    public enum Category {
        CAR_DAMAGES("CAR DAMAGES"),
        LOW_GAS("LOW GAS"),
        IGNITION_KEY_REPLACEMENT("IGNITION KEY REPLACEMENT"),
        TICKETS_VIOLATION_PROCESSING("TICKETS/VIOLATION PROCESSING"),
        LATE_RETURN("LATE RETURN"),
        BOOKING_CANCELLATION("BOOKING CANCELLATION"),
        OTHER_VIOLATIONS("OTHER VIOLATIONS");

        private final String name;

        Category(String s) {
            name = s;
        }

        public boolean equalsName(String otherName) {
            // (otherName == null) check is not needed because name.equals(null) returns false
            return name.equals(otherName);
        }

        public String toString() {
            return this.name;
        }
    }
}
