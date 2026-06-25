import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "admin/fetchOrders",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().admin.token;

      const res = await axios.get(
        "https://ecommerce-backend-u98m.onrender.com/admin/all-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data.orders;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const adminOrderSlice = createSlice({
  name: "adminOrder",
  initialState: {
    orders: [],
    loadingOrder: false,
    error: null,
    status: "idle",
  },

  extraReducers: (builder) => {
    builder

      // for fetching orders
      .addCase(fetchOrders.pending, (state) => {
        state.loadingOrder = true;
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loadingOrder = false;
        state.orders = action.payload;
        state.status = "succeeded";
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.loadingOrder = false;
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export default adminOrderSlice.reducer;
