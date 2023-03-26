package com.assignment.loansystem.service;

import com.assignment.loansystem.model.Loan;
import com.assignment.loansystem.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

public class LoanServiceImpl implements LoanService{

    Map<String, String> dummyPersonalCodes = Map.of("49002010965", "debt", "49002010976", "100", "49002010987", "300", "49002010998", "1000");
    @Autowired
    private LoanRepository loanRepository;

    @Override
    public Loan getLoanRequest(Loan loan) {
        return loanRepository.createRequest(loan);
    }

    public boolean checkInputValidity(String code, double amount, double period) {
        return((dummyPersonalCodes.containsKey(code)) && (amount >= 2000 && amount <= 10000) && (period >= 12 && period <= 60));
    }
}
