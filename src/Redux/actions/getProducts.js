import { getProductconstants } from "../constants/actionTypes";
import axios from "axios";
export const getProduct = () => {
  return async (disptach) => {
    const token = localStorage.getItem("LCtoken");
    disptach({ type: getProductconstants.getProductrequest });
    await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;

          disptach({
            type: getProductconstants.getProductSuccess,
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
