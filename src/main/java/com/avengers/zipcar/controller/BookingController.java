package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Booking;
import com.avengers.zipcar.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
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
    public BigDecimal getBookingCost(@RequestParam("start-time") Timestamp startTime,
                                     @RequestParam("end-time") Timestamp endTime,
                                     @RequestParam("vin") String vin ) {
        return bookingService.getBaseAmount(endTime,startTime,vin).setScale(2, RoundingMode.CEILING);
    }

    @PutMapping("/api/bookings/start/{bookingId}")
    public void startBooking(@PathVariable ("bookingId") String bookingId) {
        bookingService.startBooking(bookingId);
    }

    @PutMapping("/api/bookings/cancel/{bookingId}")
    public void cancelBooking(@PathVariable ("bookingId") String bookingId) {
        bookingService.cancelBooking(bookingId);
    }

    @PutMapping("/api/bookings/end/{bookingId}")
    public void endBooking(@PathVariable ("bookingId") String bookingId) {
        bookingService.endBooking(bookingId);
    }

    @PostMapping("/api/bookings/initiate")
    public void initiateBooking(@RequestBody Booking booking) {
        bookingService.initiateBooking(booking);
    }

    @PutMapping("/api/bookings/update/{bookingId}")
    public void updateBooking(@PathVariable("bookingId") String bookingId,
                           @RequestBody Booking booking
                           ) {
        bookingService.updateBooking(bookingId, booking.getFuel(), booking.getTotalDistanceTravelled(), booking.getActualEndTime());
    }



}
