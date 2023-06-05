import React, { Component } from "react";

export default class GreetUser extends Component {
  constructor() {
    super();
    this.state = { result: "Result will be display here", name: "" };
  }

  render() {
    return (
      <div>
        <label>Enter your name</label>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <button onClick={()=>{this.setState({result:this.state.name})}}>Greet</button>
        <h2>{this.state.result}</h2>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
