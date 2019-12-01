package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Booking;
import com.avengers.zipcar.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.List;


@RestController
public class BookingController {

    @Autowired
    BookingService bookingService;

    @RequestMapping("/api/bookings/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @RequestMapping("/api/bookings")
    public List<Booking> getBookingsByAccount(@RequestParam("account-id") String accountId) {
        return bookingService.getBookingsByAccount(accountId.toUpperCase());
    }

    @RequestMapping("/api/bookings/cost")
    public Float getBookingCost(@RequestParam("start-time") Timestamp startTime,
                                        @RequestParam("end-time") Timestamp endTime,
                                        @RequestParam("vin") String vin ) {
        return bookingService.getBaseAmount(endTime,startTime,vin);
    }

}
