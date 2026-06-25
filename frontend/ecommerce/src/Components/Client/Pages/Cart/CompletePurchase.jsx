import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchMyOrders,
  placeOrder,
} from "../../../../features/order/OrderSlice";
import { fetchCart } from "../../../../features/cart/CartSlice";

const CompletePurchase = () => {
  const location = useLocation();
  const { items, finalPrice, isShipping, totalPrice, GST } = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("cartItems", items[0]);

  let shipping;
  if (isShipping === 0) {
    shipping = "Free";
  } else {
    shipping = `₹${isShipping}`;
  }
  console.log("isshipping", isShipping, "shipping", shipping);

  const handleCompletePurchase = async () => {
    try {
      await dispatch(placeOrder()).unwrap();

      dispatch(fetchMyOrders());
      dispatch(fetchCart());

      navigate("/client/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="max-w-container-max mx-auto px-lg py-xl">
      <h1 className="font-headline-lg text-headline-lg mb-xl">Checkout</h1>
      <div className="grid-cols-1 gap-gutter items-start">
        {/* <!-- Left Column: Shipping & Payment --> */}
        {/* <!-- Right Column: Order Summary --> */}
        <aside className="max-w-4xl mx-auto w-full">
          <div className="space-y-md">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-md overflow-hidden">
              <div className="p-lg bg-surface-container border-b border-outline-variant">
                <h3 className="font-headline-md text-headline-md">
                  Order Summary
                </h3>
              </div>
              <div className="p-lg space-y-lg">
                {/* <!-- Items --> */}
                <div className="space-y-md">
                  {items.map((item) => (
                    <div key={item._id} className="flex items-start space-x-md">
                      <div className="w-40 h-40 bg-surface-container-high rounded-lg shrink-0 bg-cover bg-center border border-outline-variant/30">
                        <img
                          src={item.product.image.url}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h4 className="font-label-md text-headline-md">
                          {item.product.title}
                        </h4>
                        <p className="font-body-sm text-on-surface-variant">
                          Qty:{item.quantity}
                        </p>
                        <p className="font-label-md text-primary mt-xs">
                          ₹{item.product.price}
                        </p>
                        <span className="font-headline-md text-black">
                          Total ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="border-outline-variant" />
                {/* <!-- Totals --> */}
                <div className="space-y-sm">
                  <div className="flex justify-between text-body-md">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="text-on-surface">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-body-md">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-tertiary font-bold">{shipping}</span>
                  </div>
                  <div className="flex justify-between text-body-md">
                    <span className="text-on-surface-variant">GST(18%)</span>
                    <span className="text-on-surface">₹{GST}</span>
                  </div>
                </div>
                <hr className="border-outline-variant" />
                <div className="flex justify-between items-center mb-md">
                  <span className="font-headline-md text-on-surface">
                    Total
                  </span>
                  <span className="font-headline-md text-primary">
                    ₹{finalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCompletePurchase}
                  className="w-full bg-cta-orange text-white py-lg rounded-xl font-headline-md shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-md"
                >
                  <span className="">Complete Purchase</span>
                  <span className="material-symbols-outlined">
                    shopping_cart_checkout
                  </span>
                </button>
                <p className="text-center font-body-sm text-on-surface-variant mt-md">
                  Secure Encrypted Checkout
                </p>
              </div>
            </div>
            {/* <!-- Trust Badges --> */}
            <div className="flex justify-center space-x-lg py-md opacity-60 grayscale hover:grayscale-0 transition-all">
              <span
                className="material-symbols-outlined text-4xl"
                title="Secure Payment"
              >
                verified_user
              </span>
              <span
                className="material-symbols-outlined text-4xl"
                title="Fast Shipping"
              >
                local_shipping
              </span>
              <span
                className="material-symbols-outlined text-4xl"
                title="24/7 Support"
              >
                support_agent
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
export default CompletePurchase;
