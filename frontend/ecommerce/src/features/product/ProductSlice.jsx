import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "products/fetch",
  async ({ page, category }) => {
    const res = await axios.get(
      `https://ecommerce-backend-u98m.onrender.com/client/getProducts?page=${page}&limit=10&category=${category || ""}`,
    );

    return res.data;
  },
);

export const fetchCategories = createAsyncThunk(
  "products/categories",
  async () => {
    const res = await axios.get(
      "https://ecommerce-backend-u98m.onrender.com/client/categories",
    );
    return res.data.categories;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productItems: [],
    categories: [],
    page: 1,
    pages: 1,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productItems = action.payload.products;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
      state.status = "succeeded";
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
