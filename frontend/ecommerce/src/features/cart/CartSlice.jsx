import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const res = await axios.get("http://localhost:5000/client/get-cart", {
    withCredentials: true,
  });

  return res.data.cartItems;
});

export const deleteAll = createAsyncThunk("cart/clearAll", async () => {
  const res = await axios.post(
    "http://localhost:5000/client/clear-cart",
    {},
    { withCredentials: true },
  );
  return res.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });

    builder.addCase(deleteAll.fulfilled, (state) => {
      state.items = [];
    });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
