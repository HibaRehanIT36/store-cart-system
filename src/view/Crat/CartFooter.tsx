import React from "react";
import { CartFooterProprsType } from "../../types";
import { calculateTotalPrice } from "../../utils/totalPriceSelector";

function CartFooter(props:CartFooterProprsType) {
  const {CartItems , buyCartItems}=props;
  const totalPrice = calculateTotalPrice(CartItems)
  return (
    <div className="cart-total">
      <div className="total-price-part">
        <strong>Total Price</strong>
        <span className="cart-price-total">${totalPrice}</span>
      </div>
      <button className="btn-buy" onClick={buyCartItems}>
        buy <span className="icon-bag-shopping"/>
      </button>
    </div>
  );
}

export default CartFooter;
