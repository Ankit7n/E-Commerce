import { useEffect, useState } from "react";
import useVerifyAdmin from "../../../Auth/ClientAuthLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  updateOrderStatus,
} from "../../../features/admin/adminOrderSlice";

const Dashboard = () => {
  const { admin } = useSelector((state) => state.admin);
  const { orders, loadingOrder, status } = useSelector(
    (state) => state.adminOrder,
  );

  console.log("admin rec orders", orders);

  const dispatch = useDispatch();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-background text-on-background overflow-x-hidden">
      {/* <!-- Dashboard Canvas --> */}
      <main className="p-lg space-y-lg">
        {/* <!-- Header & Date Picker --> */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Dashboard Overview
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Welcome back, {admin?.name} Here's what's happening today.
            </p>
          </div>
          <div className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant px-md py-sm rounded-lg shadow-sm cursor-pointer hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-outline">
              calendar_today
            </span>
            <span className="font-label-md text-label-md">
              Date: {time.toLocaleDateString()} Time:{" "}
              {time.toLocaleTimeString()}
            </span>
          </div>
        </div>
        {/* <!-- Recent Orders Table --> */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden">
          <div className="p-lg border-b border-outline-variant flex justify-between items-center">
            <h4 className="font-headline-md text-headline-md text-on-surface">
              Recent Orders
            </h4>
            <button className="text-primary font-bold text-label-md hover:underline">
              View All Orders
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low text-on-surface-variant">
                <tr>
                  <th className="px-lg py-md font-label-md text-label-md">
                    Order ID
                  </th>
                  <th className="px-lg py-md font-label-md text-label-md">
                    Customer
                  </th>
                  <th className="px-lg py-md font-label-md text-label-md">
                    Date
                  </th>
                  <th className="px-lg py-md font-label-md text-label-md">
                    Amount
                  </th>
                  <th className="px-lg py-md font-label-md text-label-md">
                    Status
                  </th>
                  <th className="px-lg py-md font-label-md text-label-md text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {loadingOrder ? (
                  <tr>
                    <td colSpan="6" className="text-center py-lg">
                      Loading orders...
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-lg">
                      No orders found
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="hover:bg-surface-container transition-colors"
                    >
                      {/* Order ID */}
                      <td className="px-lg py-md font-bold text-on-surface">
                        #{order._id.slice(-6).toUpperCase()}
                      </td>

                      {/* Customer */}
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-sm">
                          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-xs font-bold">
                            {order.user?.name?.slice(0, 2).toUpperCase()}
                          </div>
                          <span>{order.user?.name}</span>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-lg py-md text-on-surface-variant text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>

                      {/* Amount */}
                      <td className="px-lg py-md font-bold">
                        ₹{order.totalPrice}
                      </td>

                      {/* Status */}
                      <td className="px-lg py-md">
                        <div
                          className={`inline-flex rounded border overflow-hidden
      ${
        order.status === "Delivered"
          ? "border-green-500"
          : order.status === "Processing"
            ? "border-blue-500"
            : "border-orange-500"
      }`}
                        >
                          <select
                            value={order.status}
                            onChange={(e) =>
                              dispatch(
                                updateOrderStatus({
                                  orderId: order._id,
                                  status: e.target.value,
                                }),
                              )
                            }
                            className="px-sm py-1 text-[12px] font-bold uppercase bg-transparent outline-none"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="px-lg py-md text-right">
                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                          chevron_right
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </main>
  );
};
export default Dashboard;
