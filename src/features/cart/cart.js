import cartItems from "../../cartItems";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: cartItems,
  amount: 10,
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
    
  },
});

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
