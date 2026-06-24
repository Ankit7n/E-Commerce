import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../../features/admin/adminSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { admin, isAuthenticated } = useSelector((state) => state.admin);
  console.log("admin", admin, "isAuthenticated", isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin/login");
  };
  return (
    <main className="sticky top-0 z-50 bg-background text-on-background font-body-md selection:bg-primary selection:text-white ">
      <header className=" h-16 bg-surface shadow-sm flex justify-between items-center px-lg z-40 ">
        <div className="flex items-center gap-md flex-1">
          <NavLink
            to="/"
            className="flex items-center gap-xs px-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors active:scale-95 mr-md"
          >
            <span className="material-symbols-outlined text-[20px]">
              home_app_logo
            </span>
            <span className="font-label-md text-label-md">Home</span>
          </NavLink>
          <NavLink
            to="/admin/dashboard"
            className="flex items-center gap-xs px-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors active:scale-95 mr-md"
          >
            <span className="material-symbols-outlined text-[20px]">
              dashboard
            </span>
            <span className="font-label-md text-label-md">DashBoard</span>
          </NavLink>
          <NavLink
            to="/admin/apiProducts"
            className="flex items-center gap-xs px-sm  text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors active:scale-95 mr-md"
          >
            <span className="material-symbols-outlined text-[20px]">
              inventory_2
            </span>
            <span className="font-label-md text-label-md">Products</span>
          </NavLink>
          <div className="relative  group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full pl-10 pr-md py-2 bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary transition-all text-body-sm"
              placeholder="Search orders, products, or customers..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-xl">
          <div className="flex items-center gap-lg">
            <button className="relative text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
          <div className="h-8 w-px bg-outline-variant"></div>
          {admin && (
            <div className="flex items-center gap-sm">
              <p className="font-label-md text-label-md text-on-surface">
                {admin?.name}
              </p>
              <img
                alt="Admin Avatar"
                className="w-8 h-8 rounded-full"
                data-alt="A small, crisp circular profile avatar of a young male professional wearing a dark navy blazer. The lighting is bright and clear, emphasizing a modern corporate look suitable htmlFor a high-performance commerce platform. The image background is a neutral, light gray that complements the clean white UI design."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3g2yrXFg252yr-QyCSY__9FZ0IeY-lYUw3oqkhzpiUL_C81lHc2i6NgAjKJrP8OrmSmYrFCyjevDl5Jb4dp7XVqJfLJU3h1GzezlGvtg40vnyi0_7en0sYfG8uZfc-wHBPq3Juh8tZ-7iGB2VTH8mkU_U_us3kxs0bIqY1Fpvbu4q3gQ4KT6FWfj_bajuwVlE9vl3r4T4qsMl1nizwWdByvMZqCkbu9SJKyrdhDDZtJe6U0hN30seY8eb8TbkdT_7gpYmOG9uzfBy"
              />
            </div>
          )}

          <div className="flex items-center gap-sm ml-md">
            {/* login */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-xs px-sm py-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">
                  logout
                </span>
                <span className="font-label-md text-label-md">Logout</span>
              </button>
            ) : (
              <button
                onClick={() => navigate("/admin/login")}
                className="flex items-center gap-xs px-sm py-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">
                  login
                </span>
                <span className="font-label-md text-label-md">Login</span>
              </button>
            )}

            <button
              onClick={() => navigate("/admin/register")}
              className="flex items-center gap-xs px-sm py-1.5 bg-primary text-on-primary hover:bg-primary/90 rounded-lg transition-all active:scale-95 font-bold text-label-md"
            >
              <span className="material-symbols-outlined text-[20px]">
                person_add
              </span>
              <span className="">Register</span>
            </button>
          </div>
        </div>
      </header>
    </main>
  );
};
export default Header;
