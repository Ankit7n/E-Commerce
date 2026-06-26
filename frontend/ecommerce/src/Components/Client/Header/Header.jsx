import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../../features/auth/userSlice";
import { clearCart } from "../../../features/cart/CartSlice";
import { useMemo } from "react";
import ecommercelogo from "../../../../public/ecommercelogo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { items } = useSelector((state) => state.cart);

  const totalCartQuantity = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/logout",
        {},
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        dispatch(logoutSuccess());
        dispatch(clearCart());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="sticky top-0 z-50 bg-background text-on-background font-body-md selection:bg-primary selection:text-white">
      <header className="bg-surface border-b border-outline-variant shadow-sm h-20">
        <nav className="flex justify-between items-center w-full px-gutter mx-auto h-full">
          {/* Logo + Navigation */}
          <div className="flex items-center gap-xl">
            <img
              src="../../../../public/ecommercelogo.png"
              alt="Logo"
              className="h-12 md:h-14 object-contain"
            />

            <div className="hidden md:flex items-center gap-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant font-medium hover:text-primary"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/client/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant font-medium hover:text-primary"
                }
              >
                Shop
              </NavLink>

              <a
                href="#"
                className="text-on-surface-variant font-medium hover:text-primary"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="text-on-surface-variant font-medium hover:text-primary"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-md">
            {/* Search */}
            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant">
              <span className="material-symbols-outlined mr-2">search</span>

              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:ring-0 outline-none"
              />
            </div>

            {/* Not Logged In */}
            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/client/verify-email"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant font-medium"
                    }`
                  }
                >
                  <span className="material-symbols-outlined">person_add</span>
                  <span>Register</span>
                </NavLink>

                <NavLink
                  to="/client/login"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant font-medium"
                    }`
                  }
                >
                  <span className="material-symbols-outlined">login</span>
                  <span>Login</span>
                </NavLink>
              </>
            ) : (
              <>
                {/* User Info */}
                <div
                  onClick={() => navigate("/client/profile")}
                  className="flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary">
                    account_circle
                  </span>

                  <span className="font-semibold">{user?.name}</span>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:opacity-90 active:scale-95 transition-all"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart */}
            <NavLink
              to="/client/cart"
              className={({ isActive }) =>
                `relative p-2  hover:text-primary cursor-pointer ${
                  isActive ? "text-primary" : "text-on-surface-variant "
                }`
              }
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {totalCartQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalCartQuantity}
                </span>
              )}
            </NavLink>

            {/* Admin Portal */}
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              Admin Portal
            </button>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
