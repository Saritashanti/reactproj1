import { Component, React } from "react";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = { name: "Sarita", city: "Bangaluru" };
  }
  render() {
    return (
      <div>
        <h1>This is amazing {this.state.name}</h1>
        <h2>that all students are present at {this.state.city} </h2>
        <p>{this.state.name}</p>
        <p>{this.state.city}</p>
        <button
          onClick={() => this.setState({ name: "Sonu", city: "Tumkuru" })}
        >
          Click here
        </button>
      </div>
    );
  }
}
export default MyComponent;
