const Cart = require("../../models/Client/cart");
const Product = require("../../models/Admin/Product");

// GET PRODUCTS (PAGINATION + CATEGORY FILTER)
exports.getProduct = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const category = req.query.category;

    const query = category ? { category } : {};

    const skip = (page - 1) * limit;

    const products = await Product.find(query).skip(skip).limit(limit);

    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      products,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ADD TO CART (increment if exists)
exports.addToCart = async (req, res) => {
  console.log("add to cart trigger");

  try {
    const { productId, quantity } = req.body;

    let cartItem = await Cart.findOne({
      user: req.user.userId,
      product: productId,
    });

    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        user: req.user.userId,
        product: productId,
        quantity: quantity || 1,
      });
    }

    res.status(200).json({
      success: true,
      message: "Added to cart",
      cartItem,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET CART
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user.userId,
    }).populate("product");

    res.json({ success: true, cartItems });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE QUANTITY
exports.updateCartQty = async (req, res) => {
  try {
    const { productId, type } = req.body;

    const cart = await Cart.findOne({
      user: req.user.userId,
      product: productId,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    if (type === "inc") {
      cart.quantity += 1;
    }

    if (type === "dec") {
      if (cart.quantity > 1) {
        cart.quantity -= 1;
      } else {
        await Cart.findByIdAndDelete(cart._id);

        return res.status(200).json({
          success: true,
          deleted: true,
        });
      }
    }

    await cart.save();

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    const { cartId } = req.body;

    await Cart.findByIdAndDelete(cartId);

    res.status(200).json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.clearAllCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    await Cart.deleteMany({
      user: userId,
    });

    res.status(200).json({
      success: true,
      message: "Successfully deleted all cart items",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Dashboard
const Order = require("../../models/Client/OrderModel");
// Create user rder
exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cartItems = await Cart.find({ user: userId }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const items = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const shipping = subtotal < 2000 ? 200 : 0;
    const GST = subtotal * 0.18;
    const totalPrice = subtotal + shipping + GST;

    const order = await Order.create({
      user: userId,
      items,
      subtotal,
      shipping,
      GST,
      totalPrice,
    });

    // clear cart after purchase
    await Cart.deleteMany({ user: userId });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get user orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.userId,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
