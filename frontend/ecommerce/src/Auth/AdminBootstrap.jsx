import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  loadAdminFromStorage,
  loginAdmin,
  logoutAdmin,
  setCheckingAuth,
} from "../features/admin/adminSlice";

const AdminBootstrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        dispatch(loadAdminFromStorage());

        const token = localStorage.getItem("token");

        if (!token) {
          dispatch(setCheckingAuth(false));
          return;
        }

        const res = await axios.get("http://localhost:5000/admin/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.status) {
          dispatch(
            loginAdmin({
              admin: res.data.admin,
              token: token,
            }),
          );
        }
      } catch {
        dispatch(logoutAdmin());
      } finally {
        dispatch(setCheckingAuth(false));
      }
    };

    init();
  }, [dispatch]);

  return null;
};

export default AdminBootstrap;
