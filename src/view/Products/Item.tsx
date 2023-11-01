import React from "react";
import { productItemProps } from "../../types";

function Item(props:productItemProps) {
  const { itemInfo, addCartItem } = props;
  const { id, imagePath, title, description, price } = itemInfo;

  return (
    <div className="item">
      <span className="name-item">{title}</span>
      <span className="description-item">{description}</span>
      <img src={imagePath} alt="" className="img-item" />
      <span className="price-item">${price}</span>
      <button
        className="button-item"
        onClick={() => addCartItem({ id, title, price , imagePath })}
      >
        add to cart
      </button>
    </div>
  );
}

export default Item;
