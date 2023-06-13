import React, { Component } from "react";

export default class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/").then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        this.setState({ users: result });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div key={item.id}>
                <p>
                  {item.userId}. 
                  {item.id}
                  {item.title}
                  {item.completed}
                </p>
              </div>
            ))
          : null}
      </div>
    );
  }
}
