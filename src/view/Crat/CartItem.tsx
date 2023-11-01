import React from "react";
import { cartItemType, cartItempPropsType } from "../../types";

function CartItem(props: cartItempPropsType) {
  const { cartItemInfo, deleteCartItem, editCartItem } = props;
  const {id , title, quantity, price , imagePath} = cartItemInfo;
  return (
    <div className="cart-item">
      <img src={imagePath} width="80px" alt="" />
      <div className="cart-item-details">
        <span className="cart-item-title">{title}</span>
        <div className="selector-quantity">
          <button className="increase-quantity" onClick={()=>editCartItem("INCREASE", id)}/>
          <input
            type="text"
            defaultValue={1}
            value={quantity}
            className="cart-item-quantity"
            disabled
          />
          <button className="decrease-quantity"  onClick={()=>editCartItem("DECREASE", id)}/>
        </div>
        <span className="cart-item-price">${price}</span>
      </div>
      <button className="btn-delete" onClick={()=>deleteCartItem(id)} />
    </div>
  );
}

export default CartItem;
