import React from "react";
import NumberSlider from "./NumberSlider";

const marks = [
  {
    value: 2000,
    label: "€2000",
  },
  {
    value: 4000,
    label: "€4000",
  },
  {
    value: 6000,
    label: "€6000",
  },
  {
    value: 8000,
    label: "€8000",
  },
  {
    value: 10000,
    label: "€10000",
  },
];

const defaultValue = 2000;
const step = 100;
const min = 2000;
const max = 10000;

const PeriodSlider = (props) => {
  const addNewAmountHandler = (event) => {
    props.onAddAmount(event);
  };

  return (
    <NumberSlider
      marks={marks}
      defaultValue={defaultValue}
      step={step}
      min={min}
      max={max}
      onAddLoanAmount={addNewAmountHandler}
      value={props.value}
    />
  );
};

export default PeriodSlider;
