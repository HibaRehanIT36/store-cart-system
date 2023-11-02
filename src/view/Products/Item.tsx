import React from "react";
import { productItemProps } from "../../types";
import noImage from "../../assets/noImage.png";
function Item(props: productItemProps) {
  const { itemInfo, addCartItem } = props;
  const { id, imagePath, title, description, price, status } = itemInfo;
 

  return (
    <div className="item" tag-data={status}>
      <span className="name-item">{title}</span>
      <span className="description-item">{description}</span>
      <img
        src={imagePath.includes("any") ? noImage : imagePath}
        alt=""
        className="img-item"
      />
      <span className="price-item">${price}</span>
      <button
        className="button-item"
        onClick={() => addCartItem({ id, title, price, imagePath, status })}
      >
        add to cart
      </button>
    </div>
  );
}

export default Item;
