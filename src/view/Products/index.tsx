import React from "react";
import Item from "./Item";
import { UseGetProductHandler } from "../../hooks/UseGetProductHandler";
import { productPropsType } from "../../types";

function Products(props: productPropsType) {
  const { products } = UseGetProductHandler();
  const { addCartItem } = props;
  return (
    <div className="container-items">
      {products.length > 0 ? (
        products.map((item) => (
          <Item itemInfo={item} addCartItem={addCartItem} />
        ))
      ) : (
        <p className="loading-text">product is loading ...</p>
      )}
    </div>
  );
}

export default Products;
