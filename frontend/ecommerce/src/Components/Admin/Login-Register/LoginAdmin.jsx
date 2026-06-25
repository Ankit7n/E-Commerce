import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../../features/admin/adminSlice";

const LoginAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        "https://ecommerce-backend-u98m.onrender.com/admin/login",
        formData,
      );

      console.log(response.data);

      if (response.data.status) {
        dispatch(
          loginAdmin({
            admin: response.data.admin,
            token: response.data.token,
          }),
        );

        navigate("/admin/dashboard");
      }

      // reset form
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Registration Failed";

      alert(message);
    } finally {
      setLoading(false);
      console.log("done");
    }
  };

  return (
    <main className="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden">
      <button
        type="button"
        onClick={() => navigate("/")}
        className=" flex items-center gap-2 text-blue-600 hover:text-purple-800"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Store
      </button>
      <main className="grow flex items-center justify-center p-sm relative admin-gradient-bg">
        {/* <!-- Background Security Pattern --> */}

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
          }}
        ></div>
        {/* <div className="w-full max-w-120 z-10"> */}

        <div className="w-150 z-10">
          {/* <!-- Warning Banner --> */}
          <div className="mb-sm bg-error-container text-on-error-container p-md rounded-xl flex items-start gap-md border border-error/20 shadow-sm animate-pulse ">
            <span
              className="material-symbols-outlined mt-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            <div>
              <p className="font-bold font-body-md text-body-md uppercase tracking-tight">
                Authorized Access Only
              </p>
              <p className="font-body-sm text-body-sm opacity-90">
                All connection attempts and activities are logged and monitored.
                Unauthorized access is strictly prohibited under Corporate
                Security Policy 4.2.
              </p>
            </div>
          </div>
          {/* <!-- Login Card --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-xl py-sm">
            <div className="mb-xl">
              <h1 className="font-headline-lg text-headline-md text-on-surface mb-xs">
                Admin Login
              </h1>
              <p className="font-body-md text-body-sm text-on-surface-variant">
                Identify yourself to access the commerce dashboard.
              </p>
            </div>
            <form className="space-y-lg" onSubmit={handleSubmit}>
              {/* <!-- Email  --> */}
              <div className="space-y-xs">
                <label
                  className="block font-label-sm text-label-sm text-on-surface-variant"
                  htmlFor="uid"
                >
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    contact_mail
                  </span>
                  <input
                    className="w-full pl-11 pr-md py-md bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-body-md text-body-md"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. abc@gmail.com"
                  />
                </div>
              </div>
              {/* <!-- Password --> */}
              <div className="space-y-xs">
                <div className="flex justify-between items-center">
                  <label
                    className="block font-label-sm text-label-sm text-on-surface-variant"
                    htmlFor="password"
                  >
                    Secure Password
                  </label>
                  <a
                    className="text-primary font-label-sm text-label-sm hover:underline"
                    href="#"
                  >
                    Reset Password
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    lock
                  </span>
                  <input
                    className="w-full pl-11 pr-md py-md bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-body-md text-body-md"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••••••"
                  />
                </div>
              </div>
              {/* <!-- Submit Button --> */}
              <button
                className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-md rounded-xl font-bold font-body-lg text-body-lg shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-md"
                type="submit"
                disabled={loading}
              >
                {loading ? "Accessing Dashboard..." : "Access Dashboard"}

                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
            <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
              New to Modern Commerce?
              <a
                onClick={() => navigate("/admin/register")}
                className="font-bold text-primary hover:text-on-primary-fixed-variant transition-colors ml-1 cursor-pointer hover:underline"
              >
                Register Admin
              </a>
            </p>
          </div>
          {/* <!-- Additional Help Links --> */}
          <div className="mt-lg flex flex-wrap justify-center gap-xl">
            <a
              className="flex items-center gap-xs text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                support_agent
              </span>
              Emergency IT Support
            </a>
            <a
              className="flex items-center gap-xs text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                key_visualizer
              </span>
              Request Access
            </a>
          </div>
        </div>
      </main>
    </main>
  );
};
export default LoginAdmin;
