import React, { useEffect, useState } from "react";
import { productItemType, productStatus } from "../types";

export function UseGetProductHandler() {
  const [products, setProducts] = useState<productItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${currentPage-1}&limit=4`)
      .then((response) => response.json())
      .then((productData) => {
          const slicedProducts = productData.slice(0, 10).map((item: any) => ({
            id: item.id,
            title: item.title.slice(0, 10),
            price: item.price,
            description: item.description.slice(0, 30),
            imagePath: item.images[0],
            status: "normal",
          }));
          setProducts(slicedProducts);  

                
      })
      .catch((error) => {
        window.alert("Error fetching products");
      });
  }, [currentPage]);
  const changeProductStatus = (updatedStatus: productStatus, id: number) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
      updatedProducts[index].status = updatedStatus;
      setProducts(updatedProducts);
    }
    return { products, changeProductStatus };
  };
  return { products, changeProductStatus , currentPage, setCurrentPage };
}
