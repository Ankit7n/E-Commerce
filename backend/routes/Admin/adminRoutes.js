// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const verifyAdmin = require("../../middleware/auth");

const upload = require("../../middleware/upload");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllOrders,
  updateOrderStatus,
} = require("../../controllers/Admin/productController");
const { registerAdmin, loginAdmin } = require("../../controllers/Admin/admin");
const RegisterAdmin = require("../../models/Admin/RegisterAdmin");

router.post(
  "/api/createProducts",
  verifyAdmin,
  upload.single("image"),
  createProduct,
);
router.get("/getProduct/:id", verifyAdmin, getProductById);
router.put(
  "/updateProduct/:id",
  verifyAdmin,
  upload.single("image"),
  updateProduct,
);
router.get("/getApi", verifyAdmin, getProducts);
router.delete("/deleteProduct/:id", verifyAdmin, deleteProduct);
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.get("/verify", verifyAdmin, async (req, res) => {
  const admin = await RegisterAdmin.findById(req.admin.id).select("-password");

  res.status(200).json({
    status: true,
    admin,
  });
});

// Dashboard
router.get("/all-orders", verifyAdmin, getAllOrders);
router.put("/order/status", verifyAdmin, updateOrderStatus);

module.exports = router;
