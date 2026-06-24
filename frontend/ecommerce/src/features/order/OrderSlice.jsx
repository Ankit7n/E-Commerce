import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (_, thunkAPI) => {
    const res = await axios.post(
      "http://localhost:5000/client/place-order",
      {},
      {
        withCredentials: true,
      },
    );

    return res.data;
  },
);

export const fetchMyOrders = createAsyncThunk(
  "order/fetchMyOrders",
  async () => {
    const res = await axios.get("http://localhost:5000/client/my-orders", {
      withCredentials: true,
    });

    return res.data.orders;
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loadingOrder: false,
  },

  extraReducers: (builder) => {
    builder
      // for place order
      .addCase(placeOrder.pending, (state) => {
        state.loadingOrder = true;
      })

      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loadingOrder = false;

        // add newest order at beginning
        state.orders.unshift(action.payload.order);
      })

      .addCase(placeOrder.rejected, (state) => {
        state.loadingOrder = false;
      })

      // for fetching orders
      .addCase(fetchMyOrders.pending, (state) => {
        state.loadingOrder = true;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loadingOrder = false;
        state.orders = action.payload;
      })

      .addCase(fetchMyOrders.rejected, (state) => {
        state.loadingOrder = false;
      });
  },
});

export default orderSlice.reducer;
