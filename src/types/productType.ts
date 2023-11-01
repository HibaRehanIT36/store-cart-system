export type productItemType = {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  price: number;
};

export type addedProductType = {
  id: number;
  title: string;
  price: number;
  imagePath: string;
};

export type productPropsType = {
  addCartItem: (params: addedProductType) => void;
};

export type productItemProps={
    itemInfo:productItemType;
    addCartItem: (params: addedProductType) => void;
}