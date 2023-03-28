import React from "react";
import NumberSlider from "./NumberSlider";

// Settings to use re-usable component NumberSlider for PeriodSlider
const marks = [
  {
    value: 12,
    label: "12 months",
  },
  {
    value: 24,
    label: "24 months",
  },
  {
    value: 36,
    label: "36 months",
  },
  {
    value: 48,
    label: "48 months",
  },
  {
    value: 60,
    label: "60 months",
  },
];

const defaultValue = 12;
const step = 1;
const min = 12;
const max = 60;

// Function for passing selected period to the NumberSlider re-usable component to show the value on the slider
const PeriodSlider = (props) => {
  const addNewPeriodHandler = (event) => {
    props.onAddPeriod(event);
  };

  return (
    <NumberSlider
      marks={marks}
      defaultValue={defaultValue}
      step={step}
      min={min}
      max={max}
      value={props.value}
      onAddLoanPeriod={addNewPeriodHandler}
    />
  );
};

export default PeriodSlider;
