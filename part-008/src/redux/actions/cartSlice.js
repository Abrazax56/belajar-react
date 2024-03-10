import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("say")) || []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.name === action.payload.name
      );
      if(itemInCart) {
        itemInCart.co++;
      } else {
        state.data.push(action.payload);
      }
      
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;