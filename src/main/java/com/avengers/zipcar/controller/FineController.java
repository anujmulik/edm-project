package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Fines;
import com.avengers.zipcar.service.FineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FineController {

    @Autowired
    FineService fineService;

    @RequestMapping("/api/fines/all")
    public List<Fines> getAllFines() {
        return fineService.getAllFines();
    }

    @RequestMapping("/api/fines-by-account")
    public List<Fines> getAllFinesByAccount(@RequestParam("account-id") String accountId) {
        return fineService.getFinesByAccount(accountId);
    }

    @RequestMapping("/api/fines-by-booking")
    public List<Fines> getAllFinesByBookingId(@RequestParam("booking-id") String bookingId) {
        return fineService.getFinesByBookingId(bookingId);
    }

    @PostMapping("/api/fines")
    public void addNewFine(@RequestBody Fines fine) {
        fineService.addFines(fine);
    }

    @DeleteMapping("/api/fines/{bookingId}/{instance}")
    public void deleteFine(@PathVariable String bookingId, @PathVariable int instance) {
        fineService.deleteFines(bookingId, instance);
    }

    @PutMapping("/api/fines/{bookingId}/{instance}")
    public void updateFine(@PathVariable String bookingId, @PathVariable int instance, @RequestBody Fines fine) {
        fineService.updateFines(fine, bookingId, instance);
    }
}
