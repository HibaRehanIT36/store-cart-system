import React, { useState } from "react";
import Products from "../Products";
import Cart from "../Crat";
import Header from "../../layout/Header";
import { UseGetCartHandler } from "../../hooks/UseGetCartHandler";
import { UseGetProductHandler } from "../../hooks/UseGetProductHandler";

function Home() {
  const { products, changeProductStatus, currentPage, setCurrentPage } =
    UseGetProductHandler();
  const { CartItems, addCartItem, editCartItem, deleteCartItem, buyCartItems } =
    UseGetCartHandler(changeProductStatus);
  return (
    <div>
      <Header />
      <div className="container">
        <Products
          addCartItem={addCartItem}
          products={products}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
