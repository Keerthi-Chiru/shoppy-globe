import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Configure the Redux store with the cart slice reducer
const cartStore = configureStore({
    reducer: {
        cart: cartSlice, // The cart state managed by cartSlice reducer
    },
});

export default cartStore;
