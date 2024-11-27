import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,

  reducers: {
    setToCart: (state, data) => {
      let pizaOrder = data.payload;
      state.cart.push(pizaOrder);
    },
    removeToCart: (state, data) => {
      const newCart = state.cart.filter((item) => {
        return data.payload !== item.id;
      });
      state.cart = newCart;
    },
    onClearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setToCart, removeToCart, onClearCart } = addToCartSlice.actions;

export default addToCartSlice;
