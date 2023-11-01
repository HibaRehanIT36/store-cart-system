import React, { useState } from "react";
import Products from "../Products";
import Cart from "../Crat";
import Header from "../../layout/Header";
import { UseGetCartHandler } from "../../hooks/UseGetCartHandler";

function Home() {
  const { CartItems, addCartItem, editCartItem, deleteCartItem, buyCartItems } =
    UseGetCartHandler();
  return (
    <div>
      <Header />
      <div className="container">
        <Products addCartItem={addCartItem} />
        <Cart
          CartItems={CartItems}
          editCartItem={editCartItem}
          deleteCartItem={deleteCartItem}
          buyCartItems={buyCartItems}
        />
      </div>
    </div>
  );
}

export default Home;
