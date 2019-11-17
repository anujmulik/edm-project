package com.avengers.zipcar.entity;

public class Employee {

    private String employeeId;
    private String firstName;
    private String lastName;
    private EmployeeType type;

    enum EmployeeType {
        CSR, CH
    }

    public Employee(String employeeId, String firstName, String lastName, String type) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.type = EmployeeType.valueOf(type);
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
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

    public String getType() {
        return type.name();
    }

    public void setType(String type) {
        this.type = EmployeeType.valueOf(type);
    }

    @Override
    public String toString() {
        return "Employee[" +
                "employeeId='" + employeeId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", type=" + type +
                ']';
    }
}



