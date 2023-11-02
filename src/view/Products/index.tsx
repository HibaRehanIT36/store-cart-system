import React from "react";
import Item from "./Item";
import { productPropsType } from "../../types";
import Pagination from "../../layout/Pagination";

function Products(props: productPropsType) {
  const { addCartItem, products, currentPage, setCurrentPage } = props;
  return (
    <div className="container-items">
      {products.length > 0 ? (
        <>
          {products.map((item) => (
            <Item itemInfo={item} addCartItem={addCartItem} />
          ))}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalNumber={products.length}
          />
        </>
      ) : (
        <p className="loading-text">product is loading ...</p>
      )}
    </div>
  );
}

export default Products;
