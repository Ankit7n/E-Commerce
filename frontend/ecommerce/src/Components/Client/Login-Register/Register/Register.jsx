import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const location = useLocation();

  const [isResend, setIsResend] = useState(null);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    adress: "",
    password: "",
    confPassword: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userForm.password !== userForm.confPassword) {
      setMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const userData = {
        name: userForm.name,
        email: userForm.email,
        adress: userForm.adress,
        password: userForm.password,
        otp: userForm.otp,
      };
      const response = await axios.post(
        "http://localhost:5000/client/verify-register-otp",
        userData,
      );
      console.log("response", response.data);

      if (response.data.success) {
        console.log(response.data.message);
        setMsg(response.data.message);

        setTimeout(() => {
          setMsg("Redirecting to Login Page...");

          setTimeout(() => {
            navigate("/client/login");
          }, 1000);
        }, 1000);
      }

      // reset form
      setUserForm({
        name: "",
        email: "",
        adress: "",
        password: "",
        confPassword: "",
        otp: "",
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

  const handleResendCode = async () => {
    try {
      setIsResend(true);
      const email = location.state?.email;
      console.log("email", email);
      if (!email) {
        setMsg("Email not found. Please verify email again.");
        return;
      }
      const formData = {
        email,
      };
      const response = await axios.post(
        "http://localhost:5000/client/send-register-otp",
        formData,
      );
      console.log(response.data);

      if (response.data.success) {
        console.log(response.data.message);
        setMsg("Code send Sucessfully");
        setTimeout(() => {
          setMsg("");
        }, 1000);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Verifing Failed";

      console.log(message);
      setMsg(message);
    } finally {
      setIsResend(false);
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
      {/* <!-- Registration Card --> */}
      <div className="relative z-10 w-full max-w-150 bg-surface-container-lowest rounded-xl shadow-lg p-lg md:p-xl border border-outline-variant">
        <div className="text-center mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
            Create Your Account
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join our premium commerce community today.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-md" method="POST">
          {/* <!-- Full Name --> */}
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface-variant mb-xs"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              id="full_name"
              name="name"
              placeholder="Enter your full name"
              required=""
              type="text"
              value={userForm.name}
              onChange={handleChange}
            />
          </div>
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
              type="email"
              value={userForm.email}
              onChange={handleChange}
            />

            <label
              className="block font-label-md text-label-md text-on-surface-variant mb-xs mt-4"
              htmlFor="email"
            >
              House Address
            </label>
            <textarea
              className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
              id="adress"
              name="adress"
              placeholder="#123, xxx"
              required=""
              value={userForm.adress}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div>
              <label
                className="block font-label-md text-label-md text-on-surface-variant mb-xs"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                id="password"
                name="password"
                placeholder="••••••••"
                required=""
                type="password"
                value={userForm.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block font-label-md text-label-md text-on-surface-variant mb-xs"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                id="confirm_password"
                name="confPassword"
                placeholder="••••••••"
                required=""
                type="password"
                value={userForm.confPassword}
                onChange={handleChange}
              />
            </div>
            {/* <!-- OTP Verify--> */}
            <div>
              <label
                className="block font-label-md text-label-md text-on-surface-variant mb-xs"
                htmlFor="full_name"
              >
                Enter 6 Digit OTP
              </label>
              <input
                className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                id="otp"
                name="otp"
                placeholder="XXXXXX"
                required=""
                type="text"
                maxLength={6}
                value={userForm.otp}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <!-- Terms Checkbox --> */}
          <div className="flex items-start gap-sm py-xs">
            <label
              className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
              htmlFor="terms"
            >
              {isResend ? "Resending Code..." : "Resend Code "}

              {isResend ? (
                ""
              ) : (
                <a
                  onClick={handleResendCode}
                  className="text-primary hover:underline font-semibold"
                >
                  Click Here
                </a>
              )}
            </label>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant ">
            {msg ? msg : ""}
          </p>
          {/* <!-- Submit Button --> */}
          <button
            className="w-full py-md bg-primary-container text-on-primary font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-sm"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
            <span
              className="material-symbols-outlined text-[20px]"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
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
export default Register;
