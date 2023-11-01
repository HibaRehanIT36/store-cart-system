import React, { useState } from "react";
import { addedProductType, cartItemType, quanitySelectorType } from "../types";

export function UseGetCartHandler() {
  const [CartItems, setCratItems] = useState<cartItemType[]>([]);
  const addCartItem = (product: addedProductType) => {
    if (CartItems.some((cartItem) => cartItem.id === product.id))
      window.alert("This item is already added to your cart");
    else
      setCratItems((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
  };

  const deleteCartItem = (id: number) => {
    setCratItems((prev) => prev.filter((item) => item.id !== id));
  };

  const editCartItem = (
    quanitySelectorType: quanitySelectorType,
    id: number
  ) => {
    setCratItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (quanitySelectorType === "INCREASE") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (quanitySelectorType === "DECREASE" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };
  const buyCartItems = () => {
    fetch("https://api.example.com/items", {
      method: "POST",
      body: JSON.stringify(CartItems),
    })
      .then((response) => response.json())
      .then((createdItem) => {
        setCratItems([]);
        window.alert("your order has been processed successfully");
      })
      .catch((error) => {
        window.alert("something went wrong!!\nplease try again");
      });
  };
  return { CartItems, addCartItem, editCartItem, deleteCartItem, buyCartItems };
}
