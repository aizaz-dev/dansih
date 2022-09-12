import { getProductconstants } from "../constants/actionTypes";

const initialstate = {
  loading: false,
  data: [],
};

export const getProductReducer = (state = initialstate, action) => {
  switch (action.type) {
    case getProductconstants.getProductrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getProductconstants.getProductSuccess: {
      state = {
        ...state,
        loading: false,
        data: action.payload.data,
      };
      break;
    }
    case getProductconstants.getProductfailure: {
      state = {
        ...state,
        loading: false,
      };
    }
  }
  return state;
};
