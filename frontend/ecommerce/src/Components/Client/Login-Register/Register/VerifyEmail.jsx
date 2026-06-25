import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();

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
    try {
      const response = await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/send-register-otp",
        formData,
      );

      console.log(response.data);

      if (response.data.success) {
        console.log(response.data.message);
        setMsg(response.data.message);
        setTimeout(() => {
          setMsg("Redirecting to Registration Page...");

          setTimeout(() => {
            navigate("/client/register", { state: { email: formData.email } });
          }, 1000);
        }, 1000);
      }

      // reset form
      setFormData({
        email: "",
      });
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Verifing Failed";

      console.log(message);

      setMsg(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="grow flex items-center justify-center py-2xl px-margin-mobile relative overflow-hidden">
      {/* <!-- Subtle Background Pattern --> */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#004ac6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      {/* <!-- Verify Email --> */}
      <div className="relative z-10 w-full max-w-150 bg-surface-container-lowest rounded-xl shadow-lg p-lg md:p-xl border border-outline-variant">
        <div className="text-center mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
            Verify Email For Creating Account
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join our premium commerce community today.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-md" method="POST">
          {/* <!-- Email Address --> */}
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface-variant mb-xs"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              id="email"
              name="email"
              placeholder="name@example.com"
              required=""
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          {/* message  */}
          <div className="text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              {msg ? msg : ""}
            </p>
          </div>
          {/* <!-- Submit Button --> */}
          <button
            className="w-full py-md bg-primary-container text-on-primary font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-sm"
            type="submit"
            disabled={loading}
          >
            {loading ? "OTP Sending..." : "OTP Send"}
          </button>
        </form>
        <div className="mt-xl pt-lg border-t border-outline-variant text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Already have an account?
            <a
              onClick={() => navigate("/client/login")}
              className="text-primary font-bold  hover:underline ml-xs transition-all cursor-pointer"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};
export default VerifyEmail;
