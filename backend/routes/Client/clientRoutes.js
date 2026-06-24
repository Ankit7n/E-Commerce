const express = require("express");
const router = express.Router();
const {
  getProduct,
  addToCart,
  getCart,
  updateCartQty,
  getCategories,
  removeCartItem,
  clearAllCart,
  createOrder,
  getUserOrders,
} = require("../../controllers/Client/Products");
const {
  sendRegisterOTP,
  verifyRegisterOTP,
  sendResetOTP,
  verifyResetOTP,
  loginUser,
  logoutUser,
  getMe,
} = require("../../controllers/Client/clientAuth");
const verifyUser = require("../../middleware/verifyUser");

// Product related router
router.get("/getProducts", getProduct);
router.get("/categories", getCategories);
router.post("/add-to-cart", verifyUser, addToCart);
router.get("/get-cart", verifyUser, getCart);
router.post("/update-cart", verifyUser, updateCartQty);
router.post("/remove-cart-item", verifyUser, removeCartItem);
router.post("/clear-cart", verifyUser, clearAllCart);
// Dashboard
router.post("/place-order", verifyUser, createOrder);
router.get("/my-orders", verifyUser, getUserOrders);

// login and registration related routes
router.post("/send-register-otp", sendRegisterOTP);
router.post("/verify-register-otp", verifyRegisterOTP);
router.post("/send-reset-otp", sendResetOTP);
router.post("/verify-reset-otp", verifyResetOTP);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", verifyUser, getMe);

module.exports = router;
