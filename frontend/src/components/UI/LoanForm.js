import React, { useState } from "react";
import styles from "./css/LoanForm.module.css";
import AmountSlider from "./AmountSlider";
import PeriodSlider from "./PeriodSlider";

const LoanForm = (props) => {
  const [enteredPersonalCode, setEnteredPersonalCode] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(2000);
  const [enteredPeriod, setEnteredPeriod] = useState(12);

  const personalCodeHandler = (event) => {
    setEnteredPersonalCode(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const periodChangeHandler = (event) => {
    setEnteredPeriod(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const loanData = {
      personalCode: enteredPersonalCode,
      amount: enteredAmount,
      period: enteredPeriod,
    };

    props.onNewLoanData(loanData);
  };

  return (
    <div className={styles.container}>
      <div className="form-container">
        <h1>Loan Decision Engine</h1>
        <form onSubmit={formSubmitHandler} className={styles.form} action="">
          <div className={styles.single_input}>
            <input
              type="text"
              size={75}
              className={styles.input}
              required
              onChange={personalCodeHandler}
              value={enteredPersonalCode}
            />
            <span>Personal code</span>
          </div>
          <div>
            <div className={styles.slider}>
              <AmountSlider onAddAmount={amountChangeHandler} />
            </div>
            Selected Loan Amount: €
            <input
              className={styles.slider_input}
              value={enteredAmount}
              type="text"
              readOnly
            />
          </div>
          <div className={styles.slider}>
            <PeriodSlider onAddPeriod={periodChangeHandler} />
          </div>
          Selected Loan Amount:
          <input
            className={styles.slider_input}
            value={enteredPeriod}
            type="text"
            readOnly
          />
          months
          <div className={styles.form_actions}>
            <button type="submit">Get Decision</button>
          </div>
        </form>
        <button className={styles.rules_btn}>Check rules</button>
      </div>
    </div>
  );
};

export default LoanForm;
