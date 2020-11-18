import React from "react";
import "./dictionary.css";

function Dictionary() {
  return (
    <div>
      <h3>New to tax? Here are some key words:</h3>
      <hr/>
      <ul>
        <li>
          <b>Gross Income: </b> Income before tax
        </li>
        <li>
          <b>Net Income: </b> Income after tax or take-home pay
        </li>
        <li>
          <b>SARS: </b> South African Revenue Service
        </li>
        <li>
          <b>TFSA: </b>Tax Free Savings Account
        </li>
      </ul>
    </div>
  );
}

export default Dictionary;
