import { combineReducers } from "redux";
import { getFilterProductReducer } from "./filterProductReducer";
import { displayProducts } from "./displayProducst";
import { handleAccountData } from "./accountDataReducer";
import { setCart } from "./addCartReducer";
import { getProductReducer } from "./getProductReducer";
import { getProductDetaiReducer } from "./getProdDetailReducer";
const RootReducer = combineReducers({
  displayGrid: displayProducts,
  AddToCart: setCart,
  account: handleAccountData,
  product: getProductReducer,
  filterData: getFilterProductReducer,
  uniqueDetail: getProductDetaiReducer,
});

export default RootReducer;