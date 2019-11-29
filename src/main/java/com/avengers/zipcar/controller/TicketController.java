package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Ticket;
import com.avengers.zipcar.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketService ticketService;

    @RequestMapping("/api/tickets/all")
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @RequestMapping("/api/tickets")
    public List<Ticket> getFilteredPlans(@RequestParam("empid") String empId) {
        return ticketService.getFilteredTickets(empId);
    }

    @RequestMapping("/api/tickets/subordinates")
    public List<Ticket> getSubordinateTickets(@RequestParam("empid") String empId) {
        return ticketService.getSubordinateTickets(empId);
    }
}
