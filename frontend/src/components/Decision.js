// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Decision = (props) => {
//   const personalCode = props.finalResponse.data.personalCode;
//   const amount = props.finalResponse.amount.data.amount;
//   const period = props.finalResponse.period.data.period;
//   console.log(personalCode, amount, period);
//   let toastBody = {
//     position: "top-center",
//     autoClose: false,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   };

//   switch (personalCode) {
//     case "Approved-more-required":
//     case "Approved-more-ten":
//       toast.success(
//         `Maximum approved amount: ${amount} (more than required)
//           Period: ${period} (exactly required period)`,
//         toastBody
//       );
//       break;
//     case "Approved-less-amount":
//       toast.warning(
//         `Maximum approved amount: ${amount} (less than required)
//           Period: ${period} (exactly required period)`,
//         toastBody
//       );
//       break;
//     case "Approved-less-period":
//       toast.warning(
//         `Maximum approved amount: ${amount} (less than required)
//           Period: ${period} (more than required period)`,
//         toastBody
//       );
//       break;

//     case "Rejected-impossible":
//       toast.error(
//         `Sorry! We tried our best but we can't approve any loan amount for any period for you`,
//         toastBody
//       );
//       break;
//     case "Debt":
//       toast.error(
//         `Oops! You have debt so we can't approve any loan amount for any period for you`,
//         toastBody
//       );
//       break;
//     case "Invalid-input":
//       toast.error(
//         `Invalid input! Please check rules before submitting your data. You have probably entered non-existing personal code`,
//         toastBody
//       );
//       break;
//     default:
//       return toast.info(`Something went wrong! Try again later.`, toastBody);
//   }

//   return (
//     <div>
//       <ToastContainer
//         position="top-center"
//         autoClose={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         theme="dark"
//       />
//     </div>
//   );
// };

// export default Decision;
