import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = { num1: "", num2: "", result: "" };
  }

  handleNum1 = (event) => {
    this.setState({ num1: event.target.value });
  };

  handleNum2 = (event) => {
    this.setState({ num2: event.target.value });
  };

  add = () => {
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };
  sub = () => {
    this.setState({
      result: parseInt(this.state.num1) - parseInt(this.state.num2),
    });
  };
  mult = () => {
    this.setState({
      result: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
  };
  div = () => {
    this.setState({
      result: parseInt(this.state.num1) / parseInt(this.state.num2),
    });
  };

  render() {
    return (
      <>
        <div className="calculator">
          <div className="cal">
            <div className="input-field">
              <label></label>
              <input
                type="number"
                value={this.state.num1}
                onChange={this.handleNum1}
              ></input>
              <br />
              <br />
              <label></label>
              <input
                type="number"
                value={this.state.num2}
                onChange={this.handleNum2}
              ></input>
              <br />
              <br />
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  this.add();
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  this.sub();
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  this.mult();
                }}
              >
                *
              </button>
              <button
                onClick={() => {
                  this.div();
                }}
              >
                /
              </button>
            </div>
            <div className="result">
              <h2>{this.state.result}</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
