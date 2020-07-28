import React from "react";
import "./errorDisplay.css";

const ErrorDisplay = (props) => {
  return (
    <div className="error-display">
      <h2>Error: {props.errorMessage}</h2>
      <h4>Please try again and allow location!</h4>
      <h5>...or else.</h5>
    </div>
  )
}

export default ErrorDisplay;