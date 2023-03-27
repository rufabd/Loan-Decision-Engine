package com.assignment.loansystem.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.DecimalFormat;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Loan {
    private String personalCode;
    private double amount;
    private double period;

    //    Checking input validity according to the given requirements
    public boolean checkInputValidity(String code, double amount, double period, Map users, double maxAmount, double minAmount, double maxPeriod, double minPeriod) {
        return((!(code.equals(""))) && (users.containsKey(code)) && (amount >= minAmount && amount <= maxAmount) && (period >= 12 && period <= 60));
    }
}
