import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";
import userReducer from "../features/auth/userSlice";
import adminReducer from "../features/admin/adminSlice";
import adminProductReducer from "../features/admin/adminProductSlice";
import cartReducer from "../features/cart/CartSlice";
import orderReducer from "../features/order/OrderSlice";
import adminOrderReducer from "../features/admin/adminOrderSlice";

const storeApp = configureStore({
  reducer: {
    adminProduct: adminProductReducer,
    product: productReducer,
    admin: adminReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    adminOrder: adminOrderReducer,
  },
});

export default storeApp;
