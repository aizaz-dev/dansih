import { selectedProdConstants } from "../constants/actionTypes";
import axios from "axios";
export const getProdDetails = (id) => {
  return async (disptach) => {
    disptach({ type: selectedProdConstants.selectedProdrequest });
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          let data = resp.data;

          disptach({
            type: selectedProdConstants.selectedProdSuccess,
            payload: {
              data,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const removeSelectedProd = () => (dispatch) => {
  dispatch({
    type: selectedProdConstants.selectedProdReset,
  });
};
