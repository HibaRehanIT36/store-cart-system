import React, { useEffect, useState } from "react";
import { productItemType } from "../types";

export function UseGetProductHandler() {
  const [products, setProducts] = useState<productItemType[]>([]);

    useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((productData) => {
        const slicedProducts = productData.slice(0, 10).map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          imagePath: item.images[0],
        }));
  
        setProducts(slicedProducts);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
    }, []);

  return { products };
}
