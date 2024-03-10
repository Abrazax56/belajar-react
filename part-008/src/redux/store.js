import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './actions/cartSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

export default store;