import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCart } from "../../../../features/cart/cartSlice";

const ProductPreview = () => {
  const location = useLocation();
  const product = location.state?.product;
  const { isLoggedIn } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.product._id === product._id);
  const qty = cartItem?.quantity || 0;
  const dispatch = useDispatch();

  const addToCart = async () => {
    try {
      if (!isLoggedIn) {
        alert("login First");
        return navigate("/client/login");
      }
      const res = await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/add-to-cart",
        {
          productId: product._id,
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

  const updateQty = async (type) => {
    try {
      await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/update-cart",
        {
          productId: product._id,
          type,
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
    <main className="grow">
      {/* <!-- PDP Hero Section --> */}
      <section className="max-w-container-max mx-auto px-lg grid grid-cols-1 lg:grid-cols-10 gap-xl pb-3xl mt-2xl">
        {/* <!-- Image Gallery (Bento Layout Style) --> */}
        <div className="lg:col-span-5 flex flex-col gap-md">
          <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hi~dden shadow-sm border border-outline-variant group relative">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              id="main-image"
              src={product.image.url}
            />
          </div>
        </div>
        {/* <!-- Product Details Sidebar --> */}
        <div className="lg:col-span-5 flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              {product.title}
            </h1>
            <div className="flex items-baseline gap-sm">
              <span className="text-display-lg font-black text-primary">
                ₹{product.price}
              </span>
              <span className="text-body-md text-on-surface-variant line-through">
                ₹{product.price + 50}
              </span>
            </div>
            <div className="flex items-center gap-xs text-primary font-bold text-label-md">
              <span className="material-symbols-outlined text-[20px]">
                check_circle
              </span>
              In Stock &amp; Ready to Ship
            </div>
          </div>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          {/* <!-- Purchase Actions --> */}
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-md">
              {qty === 0 ? (
                <button
                  onClick={addToCart}
                  className="grow bg-primary hover:bg-primary-container text-white font-black text-body-lg h-14 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-sm"
                >
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low h-14">
                  <button
                    onClick={() => updateQty("dec")}
                    className="px-md hover:bg-surface-container-high transition-colors h-full flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="px-md font-bold text-body-lg w-12 text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => updateQty("inc")}
                    className="px-md hover:bg-surface-container-high transition-colors h-full flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* <!-- Shipping Teaser --> */}
          <div className="bg-surface-container rounded-xl p-md flex items-center gap-md">
            <div className="bg-primary-container text-white p-sm rounded-lg">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>

            <div>
              <p className="font-bold text-label-md text-on-surface">
                Free Express Delivery
              </p>
              <p className="text-body-sm text-on-surface-variant">
                Orders over $500 qualify for free 2-day shipping.
              </p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-md flex items-center gap-md">
            <div className="bg-primary-container text-white p-sm rounded-lg">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>

            <div>
              <p className="font-bold text-label-md text-on-surface">
                Free Express Delivery
              </p>
              <p className="text-body-sm text-on-surface-variant">
                Orders over $500 qualify for free 2-day shipping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProductPreview;
