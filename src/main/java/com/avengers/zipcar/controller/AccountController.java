package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Account;
import com.avengers.zipcar.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @RequestMapping("/api/accounts/all")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @RequestMapping("/api/accounts")
    public Account getAccountById(@RequestParam("account-id") String accountId) {
        return accountService.getAccountByAccountId(accountId);
    }

    @PutMapping("/api/accounts/deactivate")
    public Account deactivateAccount(@RequestParam("account-id") String accountId) {
        return accountService.deactivateAccount(accountId);
    }

    @PostMapping("/api/accounts")
    public void addNewAccount(@RequestBody Account account) {
        accountService.addAccount(account);
    }

    @PutMapping("/api/accounts")
    public void updateAccount(@RequestBody Account account,
                              @RequestParam("account-id") String accountId,
                              @RequestParam("customer-id") String customerId) {
        accountService.updateAccount(account, accountId, customerId);
    }

    @PutMapping("/api/accounts/plan")
    public void selectPlan(@RequestParam("account-id") String accountId,
                           @RequestParam("plan-id") String planId) {
        accountService.selectPlan(accountId, planId);
    }
}
