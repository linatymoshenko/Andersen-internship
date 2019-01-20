import React from "react";
import "./Button.css";

export const ClearButton = props => (
  <div className="clear-button" onClick={props.handleClear}>
    {props.children}
  </div>
);
