import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductForm from "./Components/Admin/Products/ProductForm";
import ApiProducts from "./Components/Admin/Products/ApiProducts";
import EditProduct from "./Components/Admin/Products/EditProduct";
import RegisterAdmin from "./Components/Admin/Login-Register/RegisterAdmin";
import LoginAdmin from "./Components/Admin/Login-Register/LoginAdmin";
import Home from "./Components/Client/Pages/Home/Home";
import Products from "./Components/Client/Pages/Products/Products";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ClientLayout from "./Components/Layout/ClientLayout ";
import AdminLayout from "./Components/Layout/AdminLayout";
import Login from "./Components/Client/Login-Register/Login/Login";
import Register from "./Components/Client/Login-Register/Register/Register";
import VerifyEmail from "./Components/Client/Login-Register/Register/VerifyEmail";
import ForgotPass from "./Components/Client/Login-Register/Login/ForgotPass";
import ClientAuthLoader from "./Auth/ClientAuthLoader";
import AdminBootstrap from "./Auth/AdminBootstrap";
import Carts from "./Components/Client/Pages/Cart/Carts";
import CompletePurchase from "./Components/Client/Pages/Cart/CompletePurchase";
import AdminProtectedRoute from "./Auth/AdminProtectedRoute";
import Loader from "./Components/Client/Loading/Loader";
import ProductSkeleton from "./Components/Client/Loading/ProductSkeleton";
import ProductPreview from "./Components/Client/Pages/Products/ProductPreview";
import ClientProfile from "./Components/Client/Dashboard/ClientProfile";

function Context() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/client/shop" element={<Products />} />
        <Route path="/client/login" element={<Login />} />
        <Route path="/client/forgot-password" element={<ForgotPass />} />
        <Route path="/client/verify-email" element={<VerifyEmail />} />
        <Route path="/client/register" element={<Register />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/client/cart" element={<Carts />} />
        <Route
          path="/client/complete-purchase"
          element={<CompletePurchase />}
        />

        <Route path="/loader" element={<Loader />} />
        <Route path="/client/product-preview" element={<ProductPreview />} />
      </Route>

      {/* Public Admin Routes */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/register" element={<RegisterAdmin />} />

      {/* Protected Admin Routes */}
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

export default function App() {
  return (
    <BrowserRouter>
      <ClientAuthLoader />
      <AdminBootstrap />
      <Context />
    </BrowserRouter>
  );
}
