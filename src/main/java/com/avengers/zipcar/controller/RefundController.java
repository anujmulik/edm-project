package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Refund;
import com.avengers.zipcar.service.RefundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RefundController {

    @Autowired
    RefundService refundService;

    @RequestMapping("/api/refunds/all")
    public List<Refund> getAllRefunds() {
        return refundService.getAllRefunds();
    }

    @RequestMapping("/api/refunds")
    public List<Refund> getAllRefundsByAccount(@RequestParam("account-id") String accountId) {
        return refundService.getRefundsByAccount(accountId);
    }

    @PostMapping("/api/refunds")
    void addNewRefund(@RequestBody Refund refund) {
        refundService.addRefund(refund);
    }

    @DeleteMapping("/api/refunds/{bookingId}/{instance}")
    public void deleteRefund(@PathVariable String bookingId, @PathVariable int instance ) {
        refundService.deleteRefund(bookingId, instance);
    }

    @PutMapping("/api/refunds/{bookingId}/{instance}")
    public void updateRefund(@PathVariable String bookingId, @PathVariable int instance, @RequestBody Refund refund)
    {
        refundService.updateRefund(refund, instance, bookingId);
    }

}
