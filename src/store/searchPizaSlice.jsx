import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizas: [],
};

const searchedPizaaSlice = createSlice({
  name: "searchedPizaa",
  initialState,

  reducers: {
    setToSearchPiza: (state, data) => {
      let pizaOrder = data.payload;
      console.log(pizaOrder);
      state.pizas.push(pizaOrder);
    },
  },
});

export const { setToSearchPiza } = searchedPizaaSlice.actions;

export default searchedPizaaSlice;
