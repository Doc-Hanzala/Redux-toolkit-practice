import cartReducer from "./features/cart/cart";
import modalReducer from "./features/modal/modal";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
