import { cartItemType } from "../types";

export const calculateTotalPrice = (
  cartsItems: cartItemType[]
) => {
  var newPrice = 0;
  if (!cartsItems || cartsItems.length === 0) return 120.0;
  else {
    cartsItems.forEach((item) => {
      newPrice += item.price * item.quantity;
    });
    return newPrice;
  }
};
