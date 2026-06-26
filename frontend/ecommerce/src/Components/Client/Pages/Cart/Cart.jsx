import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../../../features/cart/CartSlice";
import { useState } from "react";

const Cart = ({ item }) => {
  console.log("one item", item);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState("");

  const updateQty = async (type) => {
    setLoading(true);
    try {
      await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/update-cart",
        {
          productId: item.product._id,
          type,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  const removeItem = async () => {
    try {
      await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/remove-cart-item",
        {
          cartId: item._id,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-surface-container-lowest product-card-shadow rounded-xl p-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
      {/* IMAGE */}
      <div className="w-full md:w-32 h-32 shrink-0 bg-surface-container rounded-lg overflow-hidden border border-outline-variant">
        <img
          src={item.product.image.url}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="grow space-y-xs">
        <div className="flex justify-between items-start">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {item.product.title}
          </h3>

          <button
            className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
            onClick={removeItem}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>

        <p className="text-body-sm text-on-surface-variant max-w-md">
          ₹{item.product.price}
        </p>

        {/* QTY */}
        <div className="flex flex-wrap items-center gap-md mt-md">
          <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden">
            <button
              onClick={() => updateQty("dec")}
              disabled={loading && loadingAction === "dec"}
              className="px-md py-xs hover:bg-surface-variant transition-colors active:bg-outline-variant cursor-pointer"
            >
              -
            </button>
            <span className="px-md font-label-md">{item.quantity}</span>
            <button
              onClick={() => updateQty("inc")}
              disabled={loading && loadingAction === "dec"}
              className="px-md py-xs hover:bg-surface-variant transition-colors active:bg-outline-variant cursor-pointer"
            >
              +
            </button>
          </div>
          <span className="font-headline-md text-primary">
            ₹ {item.product.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
