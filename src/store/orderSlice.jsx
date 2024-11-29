import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  userOrder: [],
};

const addToOrderSlice = createSlice({
  name: "userOrders",
  initialState,

  reducers: {
    // ORDERS
    setToOrder: (state, data) => {
      let pizaOrder = data.payload;
      state.orders.push(pizaOrder);
    },

    // PROCESSING
    setOnProcessing: (state, data) => {
      const { orderId, newStatus } = data.payload;

      const orderIndex = state.orders.findIndex(
        (order) => order.orderNumber === orderId
      );
      console.log(orderIndex);
      if (orderIndex !== -1) {
        state.orders[orderIndex].orderStatus = newStatus;
      }
    },
    // ORDER-SEARCHING
    userSearchOrder: (state, data) => {
      const order = data.payload;
      state.userOrder.push(order);
    },

    clearOrder: (state) => {
      state.userOrder = [];
    },
  },
});

export const { setToOrder, setOnProcessing, userSearchOrder, clearOrder } =
  addToOrderSlice.actions;

export default addToOrderSlice;
