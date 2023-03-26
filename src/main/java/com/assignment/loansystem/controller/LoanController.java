package com.assignment.loansystem.controller;

import com.assignment.loansystem.model.Loan;
import com.assignment.loansystem.service.LoanServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/loans")
public class LoanController {
    @Autowired
    private LoanServiceImpl loanService;

    @PostMapping("/check-loan")
    public Loan checkLoan(@RequestBody Loan loan) {
        Loan finalResult = loanService.calculateLoan(loan);
        System.out.println(finalResult.getAmount() + " " + finalResult.getPeriod() + " " + finalResult.getPersonalCode());
        return loanService.calculateLoan(loan);
    }
}
