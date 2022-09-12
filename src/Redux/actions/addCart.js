import { cartActionTypes } from "../constants/actionTypes";
// for add item from cart
export const addCart = (product) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: product,
  };
};
// for delete item from cart
export const removeCart = (product) => {
  return {
    type: cartActionTypes.DELETE_ITEM,
    payload: product,
  };
};
