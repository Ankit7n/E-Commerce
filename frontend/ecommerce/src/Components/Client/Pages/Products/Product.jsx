import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState("");

  const cartItem = cartItems.find((item) => item.product._id === product._id);
  const qty = cartItem?.quantity || 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = async () => {
    try {
      setLoading(true);
      setLoadingAction("add");

      if (!isLoggedIn) {
        alert("login First");
        return navigate("/client/login");
      }

      await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/add-to-cart",
        { productId: product._id },
        { withCredentials: true },
      );

      dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  const updateQty = async (type) => {
    try {
      setLoading(true);
      setLoadingAction(type); // "inc" or "dec"

      await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/update-cart",
        {
          productId: product._id,
          type,
        },
        { withCredentials: true },
      );

      dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  return (
    <div className="product-card bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* IMAGE */}
      <img
        onClick={() =>
          navigate("/client/product-preview", {
            state: { product },
          })
        }
        src={product.image.url}
        className="product-image w-full h-full object-cover transition-transform duration-500"
      />

      {/* start */}
      <div className="p-md flex flex-col grow">
        <p className="text-label-sm text-primary mb-1">{product.category}</p>
        <h3 className="font-headline-md text-[18px] text-on-surface truncate mb-2">
          {product.title}
        </h3>
        <span className="font-headline-md text-primary mb-md block">
          ₹{product.price}
        </span>
        {/* ADD TO CART */}
        {qty === 0 ? (
          <button
            onClick={addToCart}
            disabled={loading && loadingAction === "add"}
            className="grow bg-primary hover:bg-primary-container text-white font-black text-body-lg h-14 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-sm cursor-pointer"
          >
            {loading && loadingAction === "add" ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">
                  shopping_cart
                </span>
                Add to Cart
              </>
            )}
          </button>
        ) : (
          <div className="flex items-center justify-between border-outline-variant rounded-lg overflow-hidden bg-surface-container-low h-14">
            <button
              onClick={() => updateQty("dec")}
              disabled={loading && loadingAction === "dec"}
              className="px-md hover:bg-surface-container-high transition-colors h-full flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text">remove</span>
            </button>
            <span className="px-md font-bold text-body-lg w-12 text-center">
              {qty}
            </span>
            <button
              onClick={() => updateQty("inc")}
              disabled={loading && loadingAction === "inc"}
              className="px-md hover:bg-surface-container-high transition-colors h-full flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text">add</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
