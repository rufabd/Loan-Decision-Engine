import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const NumberSlider = (props) => {
  const marks = props.marks;

  const amountChangeHandler = (event) => {
    props.onAddLoanAmount(event);
  };

  const periodChangeHandler = (event) => {
    props.onAddLoanPeriod(event);
  };

  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={props.defaultValue}
        getAriaValueText={valuetext}
        step={props.step}
        marks={marks}
        min={props.min}
        max={props.max}
        onChange={props.min === 12 ? periodChangeHandler : amountChangeHandler}
      />
    </Box>
  );
};
export default NumberSlider;
