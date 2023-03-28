import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanData = (props) => {
  // Default toast notification body
  const toastBody = {
    position: "top-center",
    autoClose: 30000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  // Sending post request to api and getting data.
  useEffect(
    () => {
      Object.keys(props.enteredLoanData).length &&
        axios
          .post(
            "http://localhost:8080/api/loans/check-loan",
            props.enteredLoanData
          )
          .then((response) => {
            // Check response object length and return decision according to the situation which came up with response data
            if (response.data.length !== 0) {
              let amount = response.data.amount;
              let period = response.data.period;
              switch (response.data.personalCode) {
                case "Approved-more-required":
                case "Approved-more-ten":
                  toast.success(
                    `Approved max amount: €${amount} (more than required)
            Period: ${period} months (exactly required)`,
                    toastBody
                  );
                  break;
                case "Approved-less-amount":
                  toast.warning(
                    `Approved max amount: €${amount} (less than required)
            Period: ${period} months (exactly required)`,
                    toastBody
                  );
                  break;
                case "Approved-more-period":
                  toast.warning(
                    `Approved max amount: €${amount} (less than required)
            Period: ${period} months (more than required)`,
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
                  toast.info(
                    `Something went wrong! Try again later.`,
                    toastBody
                  );
              }
            }
          })
          .catch((error) => console.log(error));
    },
    // UseEffect dependencies to trigger post request again when there is a change in data
    [
      props.enteredLoanData.personalCode,
      props.enteredLoanData.amount,
      props.enteredLoanData.period,
    ]
  );

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
