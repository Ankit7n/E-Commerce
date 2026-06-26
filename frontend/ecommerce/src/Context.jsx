import { Routes, Route } from "react-router-dom";

import ClientLayout from "./Components/Layout/ClientLayout ";
import AdminLayout from "./Components/Layout/AdminLayout";

import Home from "./Components/Client/Pages/Home/Home";
import Products from "./Components/Client/Pages/Products/Products";
import Login from "./Components/Client/Login-Register/Login/Login";
import Register from "./Components/Client/Login-Register/Register/Register";
import VerifyEmail from "./Components/Client/Login-Register/Register/VerifyEmail";
import ForgotPass from "./Components/Client/Login-Register/Login/ForgotPass";
import Carts from "./Components/Client/Pages/Cart/Carts";
import CompletePurchase from "./Components/Client/Pages/Cart/CompletePurchase";
import ProductPreview from "./Components/Client/Pages/Products/ProductPreview";
import ClientProfile from "./Components/Client/Dashboard/ClientProfile";

import LoginAdmin from "./Components/Admin/Login-Register/LoginAdmin";
import RegisterAdmin from "./Components/Admin/Login-Register/RegisterAdmin";

import AdminProtectedRoute from "./Auth/AdminProtectedRoute";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ProductForm from "./Components/Admin/Products/ProductForm";
import ApiProducts from "./Components/Admin/Products/ApiProducts";
import EditProduct from "./Components/Admin/Products/EditProduct";
import ContactUs from "./Components/Client/Pages/ContactUs/ContactUs";
import AboutUs from "./Components/Client/Pages/AboutUs/AboutUs";

export default function Context() {
  return (
    <Routes>
      {/* CLIENT ROUTES */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/client/shop" element={<Products />} />
        <Route path="/client/contact" element={<ContactUs />} />
        <Route path="/client/about" element={<AboutUs />} />
        <Route path="/client/login" element={<Login />} />
        <Route path="/client/register" element={<Register />} />
        <Route path="/client/verify-email" element={<VerifyEmail />} />
        <Route path="/client/forgot-password" element={<ForgotPass />} />
        <Route path="/client/cart" element={<Carts />} />
        <Route
          path="/client/complete-purchase"
          element={<CompletePurchase />}
        />
        <Route path="/client/product-preview" element={<ProductPreview />} />
        <Route path="/client/profile" element={<ClientProfile />} />
      </Route>

      {/* ADMIN AUTH */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/register" element={<RegisterAdmin />} />

      {/* ADMIN PROTECTED */}
      <Route element={<AdminProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/productForm" element={<ProductForm />} />
          <Route path="/admin/apiProducts" element={<ApiProducts />} />
          <Route path="/admin/editProduct/:id" element={<EditProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}
