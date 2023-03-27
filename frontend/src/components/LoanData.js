import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanData = (props) => {
  // const [responseData, setResponseData] = useState({});
  const [content, setContent] = useState("");
  let toastBody = {
    position: "top-center",
    autoClose: 30000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  useEffect(() => {
    Object.keys(props.enteredLoanData).length &&
      axios
        .post(
          "http://localhost:8080/api/loans/check-loan",
          props.enteredLoanData
        )
        .then((response) => {
          if (response.data.length !== 0) {
            switch (response.data.personalCode) {
              case "Approved-more-required":
              case "Approved-more-ten":
                toast.success(
                  `Maximum approved amount: ${response.data.amount} (more than required)
          Period: ${response.data.period} (exactly required period)`,
                  toastBody
                );
                break;
              case "Approved-less-amount":
                toast.warning(
                  `Maximum approved amount: ${response.data.amount} (less than required)
          Period: ${response.data.period} months (exactly required period)`,
                  toastBody
                );
                break;
              case "Approved-more-period":
                toast.warning(
                  `Maximum approved amount: ${response.data.amount} (less than required)
          Period: ${response.data.period} (more than required period)`,
                  toastBody
                );
                break;

              case "Rejected-impossible":
                toast.error(
                  `Sorry! We tried our best but we can't approve any loan amount for any period for you`,
                  toastBody
                );
                break;
              case "Debt":
                toast.error(
                  `Oops! You have debt so we can't approve any loan amount for any period for you`,
                  toastBody
                );
                break;
              case "Invalid-input":
                toast.error(
                  `Invalid input! Please check rules before submitting your data. You have probably entered non-existing personal code`,
                  toastBody
                );
                break;
              default:
                console.log(
                  response.data.personalCode,
                  response.data.amount,
                  response.data.period
                );
                toast.info(`Something went wrong! Try again later.`, toastBody);
            }
          }
        })
        .catch((error) => console.log(error));
  }, [
    props.enteredLoanData.personalCode,
    props.enteredLoanData.amount,
    props.enteredLoanData.period,
  ]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={30000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </div>
  );
};

export default LoanData;
