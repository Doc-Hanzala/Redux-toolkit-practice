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
  },
});

export const{clearCart} = cartSlice.actions

export default cartSlice.reducer;
