import React, { useState } from "react";
import "./App.css";
import LoanData from "./components/DataFetch/LoanData";
import LoanForm from "./components/UI/LoanForm";

function App() {
  const [loanData, setLoanData] = useState({});
  // Getting user's entered data from LoanForm and passing to LoanData component
  const enteredLoanDataHandler = (enteredLoanData) => {
    setLoanData(enteredLoanData);
  };
  return (
    <div className="App">
      <LoanForm onNewLoanData={enteredLoanDataHandler} />
      <LoanData enteredLoanData={loanData} />
    </div>
  );
}

export default App;
