import { ActionTypes, cartActionTypes } from "../constants/actionTypes";

const initial = [];

export const setCart = (state = initial, { type, payload }) => {
  switch (type) {
    case cartActionTypes.ADD_ITEM:
      // chk if product already exist in cart
      const exist = state.find((x) => x.id === payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }
      break;
    case cartActionTypes.DELETE_ITEM:
      const exist1 = state.find((x) => x.id === payload.id);
      if (exist1.qty == 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
  }
};
