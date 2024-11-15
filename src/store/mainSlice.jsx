import { combineReducers } from "redux";
import addToCartSlice from "./addToCartSlice";
import searchPizaSlice from "./searchPizaSlice";

const mainReducer = combineReducers({
  cartReducer: addToCartSlice.reducer,
  pizaSearchReducer: searchPizaSlice.reducer,
});

export default mainReducer;
