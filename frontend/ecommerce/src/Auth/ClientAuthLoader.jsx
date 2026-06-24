import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authFinished, loginSuccess } from "../features/auth/userSlice";
import { fetchCart } from "../features/cart/cartSlice";
import { NavLink } from "react-router-dom";
import { fetchMyOrders } from "../features/order/OrderSlice";
const ClientAuthLoader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/client/me", {
          withCredentials: true,
        });

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
