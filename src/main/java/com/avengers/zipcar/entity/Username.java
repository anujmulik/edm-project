package com.avengers.zipcar.entity;

public class Username {
    private String username;

    public Username(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "username='" + username + '\'' +
                '}';
    }
}