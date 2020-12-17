import React, { Component } from "react";

import "./ProductInCart.css";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div className="cartProduct">
        <img
          src={"/images/products/" + this.props.data.product.image}
          alt=""
          className="cartImg"
        ></img>
        <div class="cartInventory">
          <div className="cartTitle">
            <h4>{this.props.data.product.title}</h4>
          </div>
          <div className="cartPrice">
            <h4>Price - {this.props.data.product.price.toFixed(2)}</h4>
          </div>
        </div>

        <div className="cartTotal">
          <label class="cartTotalPrice">Total Price</label>
          <h4>
            $
            {(this.props.data.product.price * this.props.data.quantity).toFixed(
              2
            )}
          </h4>
        </div>

        <button className="btn btn-sm btn-info btn-del">
          Remove from cart
        </button>
      </div>
    );
  }
}

export default ProductInCart;

/**
 *
 * 1. Create CSS file
 * 2. Import CSS file in line 2
 * 3. Work in the layout
 *
 */
