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

// update order status
export const updateOrderStatus = createAsyncThunk(
  "adminOrder/updateStatus",
  async ({ orderId, status }, { getState, rejectWithValue }) => {
    try {
      const token = getState().admin.token;

      const { data } = await axios.put(
        "https://ecommerce-backend-u98m.onrender.com/admin/order/status",
        { orderId, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data.order;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
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
    updating: false,
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
      })

      // update status

      .addCase(updateOrderStatus.pending, (state) => {
        state.updating = true;
      })

      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.updating = false;
        const updated = action.payload;

        state.orders = state.orders.map((order) =>
          order._id === updated._id ? updated : order,
        );
      })

      .addCase(updateOrderStatus.rejected, (state) => {
        state.updating = false;
      });
  },
});

export default adminOrderSlice.reducer;
