import { displayItems } from "../constants/actionTypes";
export const displayProducts = (products) => {
  return {
    type: displayItems.DISPLAY_ITEM,
    payload: products,
  };
};
