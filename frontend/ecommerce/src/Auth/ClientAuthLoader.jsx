import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCart } from "../features/cart/CartSlice";
import { authFinished, loginSuccess } from "../features/auth/userSlice";

import { NavLink } from "react-router-dom";
import { fetchMyOrders } from "../features/order/OrderSlice";
const ClientAuthLoader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-backend-u98m.onrender.com/client/me",
          {
            withCredentials: true,
          },
        );

        if (res.data.success) {
          dispatch(loginSuccess(res.data.user));
          dispatch(fetchCart());
          dispatch(fetchMyOrders());
        }
      } catch (error) {
        console.log("No user logged in");
      } finally {
        dispatch(authFinished());
      }
    };

    loadUser();
  }, [dispatch]);
  return null;
};
export default ClientAuthLoader;
