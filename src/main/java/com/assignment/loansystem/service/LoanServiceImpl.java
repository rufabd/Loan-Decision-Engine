package com.assignment.loansystem.service;

import com.assignment.loansystem.model.Loan;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Map;

@Service
public class LoanServiceImpl{

//    Dummy data of users for representing external registries
        private final Map<String, String> dummyPersonalCodes = Map.of("49002010965", "debt", "49002010976", "100", "49002010987", "300", "49002010998", "1000");

//    Default variables according to given requirement.
    private final double minimumLoanAmount = 2000;
    private final double maximumLoanAmount = 10000;
    private final double minimumPeriod = 12;
    private final double maximumPeriod = 60;

//    Number formatter for possible double values for preventing to provide user with messy data
    private Double numberFormatter(double num) {
        return Double.parseDouble((new DecimalFormat("##.#").format(num)));
    }

//    Calculate maximum amount for credit scores > 1 and return decision
    private Loan amountForCreditMoreThanOne(double creditScore, double loanAmount, double loanPeriod) {
        double maxAmount =creditScore * loanAmount;
        if(maxAmount < maximumLoanAmount) {
            return new Loan("Approved-more-required", numberFormatter(maxAmount), numberFormatter(loanPeriod));
        } else {
            return new Loan("Approved-more-ten", maximumLoanAmount, numberFormatter(loanPeriod));
        }
    }

//    Search for new possible period if not suitable amount found for given period
    private Loan searchingForNewPeriod(double finalAmountForGivenPeriod, double creditModifier, double requestedPeriod) {
        double periodToBeAdded = (minimumLoanAmount - finalAmountForGivenPeriod) / creditModifier;
        if((periodToBeAdded + requestedPeriod) <= maximumPeriod) {
            double amountToBeOffered = finalAmountForGivenPeriod + periodToBeAdded*creditModifier;
            double offeredPeriod = periodToBeAdded + requestedPeriod;
            return new Loan("Approved-more-period", numberFormatter(amountToBeOffered), numberFormatter(offeredPeriod));
        } else return new Loan("Rejected-impossible", 0, 0);
    }

//    Calculate maximum amount for credit scores < 1 and return decision
    private Loan amountForCreditLessThanOne(double creditModifier, double requestedPeriod) {
        double finalAmountForGivenPeriod = creditModifier * requestedPeriod;
        if(finalAmountForGivenPeriod >= minimumLoanAmount) return new Loan("Approved-less-amount", numberFormatter(finalAmountForGivenPeriod), numberFormatter(requestedPeriod));
        else return searchingForNewPeriod(finalAmountForGivenPeriod, creditModifier, requestedPeriod);
    }

//    Final calculation method
    public Loan calculateLoan(Loan loan) {
        String requestedPersonalCode = loan.getPersonalCode();
        double requestedAmount = loan.getAmount();
        double requestedPeriod = loan.getPeriod();

        //        Before starting calculation, check validity of entered data
        if(loan.checkInputValidity(requestedPersonalCode, requestedAmount, requestedPeriod, dummyPersonalCodes, maximumLoanAmount, minimumLoanAmount, maximumPeriod, minimumPeriod)) {

            //            Check if entered user has debt
            if(!(dummyPersonalCodes.get(requestedPersonalCode).equals("debt"))) {
                double creditModifier = Double.parseDouble(dummyPersonalCodes.get(requestedPersonalCode));
                double creditScore = (creditModifier / requestedAmount) * requestedPeriod;

                //                Check if credit score is bigger than 1. If yes, return maximum amount. If not, continue calculation ...
                if(creditScore >= 1) return amountForCreditMoreThanOne(creditScore, requestedAmount, requestedPeriod);
                else return amountForCreditLessThanOne(creditModifier, requestedPeriod);

            } else return new Loan("Debt", 0, 0);

        } else return new Loan("Invalid-input", 0, 0);
    }
}
