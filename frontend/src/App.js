import React, { useState } from "react";
import "./App.css";
import LoanData from "./components/DataFetch/LoanData";
import LoanForm from "./components/UI/LoanForm";

function App() {
  const [loanData, setLoanData] = useState({});
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
