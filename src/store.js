import cartReducer from "./features/cart/cart";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { 
    cart: cartReducer,
  },
});
