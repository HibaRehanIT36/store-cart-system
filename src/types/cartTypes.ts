export type cartItemType = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  imagePath: string;
};

export type quanitySelectorType = "INCREASE" | "DECREASE";
export type cartPropsType = {
  CartItems: cartItemType[];
  deleteCartItem: (id: number) => void;
  editCartItem: (quanitySelectorType: quanitySelectorType, id: number) => void;
  buyCartItems: () => void;
};

export type cartItempPropsType = {
  cartItemInfo: cartItemType;
  deleteCartItem: (id: number) => void;
  editCartItem: (quanitySelectorType: quanitySelectorType, id: number) => void;
};

export type CartFooterProprsType = {
  CartItems: cartItemType[];
  buyCartItems: () => void;
};
