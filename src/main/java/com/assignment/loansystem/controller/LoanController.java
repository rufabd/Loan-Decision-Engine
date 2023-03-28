package com.assignment.loansystem.controller;

import com.assignment.loansystem.model.Loan;
import com.assignment.loansystem.service.LoanServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin
public class LoanController {
    @Autowired
    private LoanServiceImpl loanService;

    @PostMapping("/check-loan")
    public Loan checkLoan(@RequestBody Loan loan) {
        return loanService.calculateLoan(loan);
    }
}
