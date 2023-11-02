import React, { useState } from "react";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { cartPropsType } from "../../types";

function Cart(props: cartPropsType) {
  const { CartItems, deleteCartItem, editCartItem, buyCartItems } = props;
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      {CartItems.length > 0 && (
        <div className={`container-cart ${!showCart ? "hidden-cart" : ""}`}>
          <div className="header-cart">
            <h2>your cart</h2>
          </div>
          <div className="cart-items">
            {CartItems.map((cartItem) => (
              <CartItem
                cartItemInfo={cartItem}
                editCartItem={editCartItem}
                deleteCartItem={deleteCartItem}
              />
            ))}
          </div>
          <CartFooter CartItems={CartItems} buyCartItems={buyCartItems} />
        </div>
      )}
      <button
        className={`toggel-cart-button ${CartItems.length === 0 ? "" : "has-items-number"}`}
        items-number={CartItems.length}
        onClick={() =>
          CartItems.length > 0
            ? setShowCart(!showCart)
            : window.alert("your cart is empty")
        }
      />
    </>
  );
}

export default Cart;
