import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./App/slices/cartSlice";
import restaurantSlice from "./App/slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
