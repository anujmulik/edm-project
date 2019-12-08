package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Payment;
import com.avengers.zipcar.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PaymentsController {

    @Autowired
    PaymentService paymentService;

    @RequestMapping("/api/payments/all")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @RequestMapping("/api/payments")
    public List<Payment> getPaymentsByAccount(@RequestParam("account-id") String accountId) {
        return paymentService.getPaymentsByAccount(accountId.toUpperCase());
    }

    @PostMapping("/api/payments")
    public void addPayment(@RequestBody Payment payment) {
        paymentService.addPayment(payment);
    }

    @PutMapping("/api/payments/confirm/{paymentId}")
    public void confirmPayment(@PathVariable("paymentId") String paymentId) {
        paymentService.confirmPayment(paymentId);
    }

    @PutMapping("/api/payments/update/{paymentId}")
    public void updatePayment(@PathVariable("paymentId") String paymentId,
                              @RequestBody Payment payment
    ) {
        paymentService.updatePayment(payment, paymentId);
    }


}
