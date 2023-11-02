export type productItemType = {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  price: number;
  status:productStatus;
};
export type productStatus ="added"|"bought"|"normal" ;
export type addedProductType = {
  id: number;
  title: string;
  price: number;
  imagePath: string;
  status:productStatus;
};

export type productPropsType = {
  addCartItem: (params: addedProductType) => void;
  products:productItemType[];
  currentPage:number ;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export type productItemProps={
    itemInfo:productItemType;
    addCartItem: (params: addedProductType) => void;
}