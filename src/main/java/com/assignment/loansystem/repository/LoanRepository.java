package com.assignment.loansystem.repository;

import com.assignment.loansystem.model.Loan;

public class LoanRepository {

    public Loan createRequest(Loan l) {
        Loan loanRequest = new Loan();
        loanRequest.setPersonalCode(l.getPersonalCode());
        loanRequest.setAmount(l.getAmount());
        loanRequest.setPeriod(l.getPeriod());
        return loanRequest;
    }
}
