import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, fetchCart } from "../../../../features/cart/CartSlice";
import Cart from "./Cart";
import { Navigate, useNavigate } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import Loader from "../../Loading/Loader";

const Carts = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { isLoggedIn, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  let isShipping = 0;
  if (totalPrice < 2000) {
    isShipping = 200;
  }

  const GST = (totalPrice * 18) / 100;
  const finalPrice = totalPrice + GST + isShipping;

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/client/login" />;
  }

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <main className="max-w-container-max mx-auto px-lg py-3xl min-h-[calc(100vh-200px)]">
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2xl text-on-surface">
        Your Cart
      </h1>
      <div className="flex justify-end mb-md">
        <button
          onClick={() => dispatch(deleteAll())}
          className="flex items-center gap-xs text-secondary hover:text-error transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-[20px]">
            delete_sweep
          </span>
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-md">
          {items.map((item) => (
            <Cart key={item._id} item={item} />
          ))}
        </div>

        {/* side bar */}

        <div className="lg:col-span-1">
          <div className="bg-surface-container-high rounded-xl p-xl sticky top-24 space-y-lg border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Order Summary
            </h2>
            <div className="space-y-md border-b border-outline-variant pb-lg">
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="font-semibold text-on-surface">
                  ₹{totalPrice}
                </span>
              </div>
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">
                  Estimated Shipping
                </span>
                <span className="text-primary font-semibold">
                  {isShipping || "FREE"}
                </span>
              </div>
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">GST(18%)</span>
                <span className="text-on-surface">₹{GST}</span>
              </div>
            </div>
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant">
                Promo Code
              </label>
              <div className="flex gap-sm">
                <input
                  className="bg-white border border-outline-variant rounded-lg px-md py-xs w-full focus:ring-2 focus:ring-primary outline-none text-body-sm uppercase tracking-widest"
                  placeholder="Enter code"
                  type="text"
                />
                <button className="bg-secondary text-white px-lg py-xs rounded-lg font-label-md hover:bg-on-secondary-container transition-colors">
                  Apply
                </button>
              </div>
            </div>
            <div className="pt-md">
              <div className="flex justify-between items-baseline mb-lg">
                <span className="font-headline-md text-headline-md text-on-surface">
                  Total
                </span>
                <span className="font-display-lg text-headline-lg text-primary">
                  ₹{finalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() =>
                  navigate("/client/complete-purchase", {
                    state: { items, finalPrice, isShipping, totalPrice, GST },
                  })
                }
                className="w-full bg-primary-container text-white py-md rounded-xl font-headline-md shadow-lg shadow-primary-container/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm cursor-pointer"
              >
                Proceed to Checkout
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center text-label-sm text-on-surface-variant mt-lg flex items-center justify-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">
                  lock
                </span>
                Secure encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carts;
