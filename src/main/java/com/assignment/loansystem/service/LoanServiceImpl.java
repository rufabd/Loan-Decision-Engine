package com.assignment.loansystem.service;

import com.assignment.loansystem.model.Loan;
import com.assignment.loansystem.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service
public class LoanServiceImpl{

//    Dummy data of users for representing external registries
    Map<String, String> dummyPersonalCodes = Map.of("49002010965", "debt", "49002010976", "100", "49002010987", "300", "49002010998", "1000");

//    Default variables according to given requirement.
    double minimumLoanAmount = 2000;
    double maximumLoanAmount = 10000;
    double minimumPeriod = 12;
    double maximumPeriod = 60;
    @Autowired
    private LoanRepository loanRepository;


    public Loan getLoanRequest(Loan loan) {
        return loanRepository.createRequest(loan);
    }

//    Checking input validity according to the given requirements
    public boolean checkInputValidity(String code, double amount, double period) {
        return((dummyPersonalCodes.containsKey(code)) && (amount >= minimumLoanAmount && amount <= maximumLoanAmount) && (period >= 12 && period <= 60));
    }

//    Calculate maximum amount for credit scores > 1 and return decision
    public Loan amountForCreditMoreThanOne(double creditScore, double loanAmount, double loanPeriod) {
        double maxAmount =creditScore * loanAmount;
        if(maxAmount < 10000) {
            return new Loan("Approved-more-required", maxAmount, loanPeriod);
        } else {
            return new Loan("Approved-more-ten", maximumLoanAmount, loanPeriod);
        }
    }

//    Search for new possible period if not suitable amount found for given period
    public Loan searchingForNewPeriod(double finalAmountForGivenPeriod, double creditModifier, double requestedPeriod) {
        double periodToBeAdded = (minimumLoanAmount - finalAmountForGivenPeriod) / creditModifier;
        if((periodToBeAdded + requestedPeriod) <= maximumPeriod) {
            double amountToBeOffered = finalAmountForGivenPeriod + periodToBeAdded*creditModifier;
            double offeredPeriod = periodToBeAdded + requestedPeriod;
            return new Loan("Approved-more-period", amountToBeOffered, offeredPeriod);
        } else return new Loan("Rejected-impossible", 0, 0);
    }

//    Calculate maximum amount for credit scores < 1 and return decision
    public Loan amountForCreditLessThanOne(double creditModifier, double requestedPeriod) {
        double finalAmountForGivenPeriod = creditModifier * requestedPeriod;
        if(finalAmountForGivenPeriod >= minimumLoanAmount) return new Loan("Approved-less-amount", finalAmountForGivenPeriod, requestedPeriod);
        else return searchingForNewPeriod(finalAmountForGivenPeriod, creditModifier, requestedPeriod);
    }

//    Final calculation method
    public Loan calculateLoan(Loan loan) {
        String requestedPersonalCode = loan.getPersonalCode();
        double requestedAmount = loan.getAmount();
        double requestedPeriod = loan.getPeriod();

        //        Before starting calculation, check validity of entered data
        if(checkInputValidity(requestedPersonalCode, requestedAmount, requestedPeriod)) {

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
