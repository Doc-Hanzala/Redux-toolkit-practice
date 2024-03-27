import cartItems from "../../cartItems";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (store) => { 
      store.cartItems = [];
    },
    removeItem: (store, action) => {
      const itemId = action.payload;
      store.cartItems = store.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (store, action) => {
      const singleItem = store.cartItems.find(
        (item) => item.id === action.payload
      );
      singleItem.amount = singleItem.amount + 1;
    },
    decrease: (store, action) => {
      const singleItem = store.cartItems.find(
        (item) => item.id === action.payload
      );
      singleItem.amount = singleItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease,calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
