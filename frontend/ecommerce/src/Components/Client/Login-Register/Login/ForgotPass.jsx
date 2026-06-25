import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SEND OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMsg("");

    try {
      const response = await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/send-reset-otp",
        {
          email: formData.email,
        },
      );

      if (response.data.success) {
        setMsg(response.data.message);
        setStep(2);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Failed to send OTP";

      setMsg(message);
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP & RESET PASSWORD
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      return setMsg("Passwords do not match");
    }

    setLoading(true);
    setMsg("");

    try {
      const response = await axios.post(
        "https://ecommerce-backend-u98m.onrender.com/client/verify-reset-otp",
        {
          email: formData.email,
          otp: formData.otp,
          newPassword: formData.newPassword,
        },
      );

      if (response.data.success) {
        setMsg(response.data.message);

        setTimeout(() => {
          navigate("/client/login");
        }, 2000);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Password reset failed";

      setMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grow flex items-center justify-center py-2xl px-margin-mobile relative overflow-hidden">
      {/* Background Pattern */}
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
            Forgot Password
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant">
            {step === 1
              ? "Enter your email to receive an OTP."
              : "Enter OTP and create a new password."}
          </p>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleSendOTP} className="space-y-md">
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              />
            </div>

            {msg && (
              <div className="text-center">
                <p>{msg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-md bg-primary-container text-on-primary font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleResetPassword} className="space-y-md">
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                OTP
              </label>

              <input
                type="text"
                name="otp"
                required
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 6 Digit OTP"
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                New Password
              </label>

              <input
                type="password"
                name="newPassword"
                required
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              />
            </div>

            {msg && (
              <div className="text-center">
                <p>{msg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-md bg-primary-container text-on-primary font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>

            <button
              type="button"
              onClick={handleSendOTP}
              className="w-full py-md border border-outline-variant rounded-lg hover:bg-gray-50 transition-all"
            >
              Resend OTP
            </button>
          </form>
        )}

        <div className="mt-xl pt-lg border-t border-outline-variant text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Remember your password?
            <span
              onClick={() => navigate("/client/login")}
              className="text-primary font-bold hover:underline ml-xs cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPass;
