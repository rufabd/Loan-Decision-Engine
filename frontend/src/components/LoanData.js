import React, { useState, useEffect } from "react";
import axios from "axios";

const LoanData = (props) => {
  //   const [loanData, setLoanData] = useState(props.enteredLoanData);
  let data = props.enteredLoanData;
  const [responseData, setResponseData] = useState(props.enteredLoanData);
  useEffect(() => {
    Object.keys(data).length &&
      axios
        .post("http://localhost:8080/api/loans/check-loan", data)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
  }, [data.personalCode, data.amount, data.period]);
};

export default LoanData;
