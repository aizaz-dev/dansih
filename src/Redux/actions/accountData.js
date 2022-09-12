import { accountData } from "../constants/actionTypes";
export const handleAccount = (data) => {
  return {
    type: accountData.SET_ACCOUNT,
    payload: data,
  };
};
