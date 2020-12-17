import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "./../ProductInCart/ProductInCart";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Cart Contents</h2>
        <hr></hr>
        <h6>You have {this.props.count} items in your cart.</h6>

        <div className="cart-products">
          {this.props.cart.map((p) => (
            <ProductInCart data={p}></ProductInCart>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
  };
};

// inside the connect function, we need to pass 2 parameters
// 1st - function that maps the props to read from the store
// 2nd - list(obj) of actions you want to dispatch
export default connect(mapStateToProps, null)(Cart);
