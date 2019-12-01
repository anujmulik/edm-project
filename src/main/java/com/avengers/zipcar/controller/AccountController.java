package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Account;
import com.avengers.zipcar.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
