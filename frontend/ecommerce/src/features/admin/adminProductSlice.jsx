import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL PRODUCTS
export const fetchProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/admin/getApi", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// GET SINGLE PRODUCT
export const fetchSingleProduct = createAsyncThunk(
  "adminProducts/fetchSingleProduct",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/admin/getProduct/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// CREATE PRODUCT
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/admin/api/createProducts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, formData }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/admin/updateProduct/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:5000/admin/deleteProduct/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH ALL
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SINGLE
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })

      // CREATE
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p._id !== action.payload);
      });
  },
});

export default adminProductSlice.reducer;
