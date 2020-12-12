import React, { Component } from "react";
import { connect } from "react-redux";
import QuantityPicker from "../QntPicker/QntPicker";
import "./Product.css";
import {
  increaseCounter,
  addProductToCart,
} from "./../../Store/actions/actions";

class Product extends Component {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="Product">
        <img
          className="prod-img"
          src={"./images/products/" + this.props.data.image}
          alt=""
        />
        <h4 className="prod-title">{this.props.data.title}</h4>

        <div className="Prices">
          <label className="total-value">${this.getTotal()}</label>
          <label className="price-value">
            ${this.props.data.price.toFixed(2)}
          </label>
        </div>

        <div className="prod-quan">
          <label className="prod-total">Total</label>
          <label className="prod-price">Price</label>
        </div>
        <div className="QPicker">
          <QuantityPicker
            onValueChange={(qnty) => this.handleQuantityChange(qnty)}
          ></QuantityPicker>
        </div>
        <button
          onClick={() => this.addProduct("")}
          className="btn btn-sm btn-info btn-add"
        >
          Add to cart
        </button>
      </div>
    );
  }

  addProduct = () => {
    console.log("Add to Cart Action");
    this.props.increaseCounter();

    var addedProduct = {
      product: this.props.data,
      quantity: this.state.quantity,
    };
    this.props.addProductToCart(addedProduct);
  };

  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    console.log("Quantity has changed in Quantity Picker", qnty);
    this.setState({ quantity: qnty });
  };
}

// inside the connect function, we need to pass 2 parameters
// 1st - function that maps the props to read from the store
// 2nd - list(obj) of actions you want to dispatch
export default connect(null, { increaseCounter, addProductToCart })(Product);
