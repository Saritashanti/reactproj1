import React, { Component } from "react";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 0, name: "Android Phone", price: 5000 },
        { id: 1, name: "Lapto", price: 20000 },
        { id: 2, name: "Mouse", price: 300 },
        { id: 3, name: "Hedphone", price: 1000 },
        { id: 4, name: "Charger", price: 1500 },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          {this.state.products.map((item) => (
            <div key={item.id}>
              <h2>
                {item.name}:{item.price}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
