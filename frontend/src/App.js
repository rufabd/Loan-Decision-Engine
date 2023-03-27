import React, { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import LoanForm from "./components/UI/LoanForm";
import LoanData from "./components/LoanData";
// import Decision from "./components/Decision";

function App() {
  const [loanData, setLoanData] = useState({});
  const enteredLoanDataHandler = (enteredLoanData) => {
    setLoanData(enteredLoanData);
  };
  return (
    <div className="App">
      <AppBar />
      <LoanForm onNewLoanData={enteredLoanDataHandler} />
      <LoanData enteredLoanData={loanData} />
      {/* <Decision /> */}
    </div>
  );
}

export default App;
