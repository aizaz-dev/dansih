import { accountData } from "../constants/actionTypes";

const initialState = {
  accountVeri: [],
};
export const handleAccountData = (state = initialState, { type, payload }) => {
  switch (type) {
    case accountData.SET_ACCOUNT:
      return { ...state, accountVeri: payload };

    default:
      return state;
  }
};
