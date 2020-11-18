import React from "react";
import axios from "axios";
import "./tax.css";
import Dictionary from "./Dictionary.js";
import { Button } from "reactstrap";

class Tax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      income: "",
      displayReport: false,
    };
    this.Reset = this.Reset.bind(this)
    this.onChange = this.onChange.bind(this)
    this.Calculate = this.Calculate.bind(this)
  }

  Reset() {
    this.setState({
      info: {},
      income: "",
      displayReport: false,
    });
  }

  onChange(e) {
    this.setState({
      income: e.target.value,
    });
  }

  async Calculate() {
    await axios
      .put(`/${this.state.income}`)
      .then((response) => this.setState({ info: response.data.taxInfo }))
      .catch((error) => console.log(error));

    this.setState({
      displayReport: !this.state.displayReport,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <h3>Calculate your tax and income</h3>
          <hr />
          <textarea
            value={this.state.income}
            onChange={(e) => this.onChange(e)}
            placeholder="Please enter your annual income before tax"
          />
          <Button color="info" onClick={() => this.Calculate()} block>
            Calculate
          </Button>
          <div className={this.state.displayReport ? "active" : "inactive"}>
            <ul>
              <li>
                Your <b>gross income</b> for the year is{" "}
                {new Intl.NumberFormat("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                }).format(this.state.income)}
              </li>
              <li>
                Your <b>total tax</b> for the year is{" "}
                {new Intl.NumberFormat("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                }).format(this.state.info.tax)}
              </li>
              <li>
                Your <b>net income for the year</b> is{" "}
                {new Intl.NumberFormat("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                }).format(this.state.info.netIncome)}
              </li>
              <li>
                Your <b>net income for the month</b> is{" "}
                {new Intl.NumberFormat("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                }).format(this.state.info.netIncome / 12)}
              </li>
            </ul>
            <Button color="info" onClick={() => this.Reset()} block>
              Reset
            </Button>
          </div>
        </div>
        <div className="dictionary">
          <Dictionary />
        </div>
      </div>
    );
  }
}

export default Tax;
