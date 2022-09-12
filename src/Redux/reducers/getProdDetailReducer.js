import { selectedProdConstants } from "../constants/actionTypes";

const initialstate = {
  loading: false,
  singleProd: [],
};

export const getProductDetaiReducer = (
  state = initialstate,
  { type, payload }
) => {
  switch (type) {
    case selectedProdConstants.selectedProdrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case selectedProdConstants.selectedProdSuccess: {
      state = {
        ...state,
        loading: false,
        data: payload.data,
      };
      break;
    }
    case selectedProdConstants.selectedProdfailure: {
      state = {
        ...state,
        loading: false,
      };
    }
    case selectedProdConstants.selectedProdReset: {
      state = {
        ...state,
        loading: false,
        data: {},
      };
    }
  }
  return state;
};
