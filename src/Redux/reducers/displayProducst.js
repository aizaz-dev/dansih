import { displayItems } from "../constants/actionTypes";

const initialState = {
  displayProducts: [],
};
export const displayProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case displayItems.DISPLAY_ITEM:
      return { ...state, displayProducts: payload };

    default:
      return state;
  }
};
