import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../../features/auth/userSlice";
import { fetchCart } from "../../../../features/cart/cartSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMsg("");

    try {
      const response = await axios.post(
        "http://localhost:5000/client/login",
        formData,
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        dispatch(loginSuccess(response.data.user));
        setMsg(response.data.message);
        dispatch(fetchCart());

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Login Failed";

      setMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grow flex items-center justify-center py-2xl px-margin-mobile relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#004ac6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-150 bg-surface-container-lowest rounded-xl shadow-lg p-lg md:p-xl border border-outline-variant">
        <div className="text-center mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
            Welcome Back
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Sign in to continue shopping.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-md">
          {/* Email */}
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface-variant mb-xs"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface-variant mb-xs"
              htmlFor="password"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/client/forgot-password")}
              className="text-primary hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>

          {/* Message */}
          {msg && (
            <div className="text-center">
              <p className="text-on-surface-variant">{msg}</p>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-md bg-primary-container text-on-primary font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-xl pt-lg border-t border-outline-variant text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Don't have an account?
            <span
              onClick={() => navigate("/client/verify-email")}
              className="text-primary font-bold hover:underline ml-xs cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
