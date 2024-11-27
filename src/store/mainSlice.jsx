import { combineReducers } from "redux";
import addToCartSlice from "./addToCartSlice";
import searchPizaSlice from "./searchPizaSlice";
import addToOrderSlice from "./orderSlice";

const mainReducer = combineReducers({
  cartReducer: addToCartSlice.reducer,
  pizaSearchReducer: searchPizaSlice.reducer,
  orderSlice: addToOrderSlice.reducer,
});

export default mainReducer;
