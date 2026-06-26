import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loading/Loader";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchMyOrders } from "../../../features/order/OrderSlice";

const ClientProfile = () => {
  const { user, loading } = useSelector((state) => state.user);
  const { orders, loadingOrder } = useSelector((state) => state.order);
  console.log("orders, loadingOrder", orders, loadingOrder);

  if (loading || loadingOrder) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/client/login" />;
  }

  return (
    <main className="pt-24 pb-32 max-w-container-max mx-auto px-margin-mobile md:px-lg">
      <div className="flex flex-col md:flex-row gap-lg">
        {/* <!-- Sidebar Navigation --> */}

        {/* <!-- Main Content Area --> */}
        <section className="space-y-xl w-full">
          {/* <!-- Personal Info Section --> */}
          <div
            className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-xl"
            id="personal-info"
          >
            <h2 className="font-headline-md text-headline-md mb-xl text-on-surface">
              Personal Information
            </h2>
            <div className="flex flex-col md:flex-row gap-xl items-start">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-surface-container-highest border-4 border-surface shadow-md">
                  <div className="w-full h-full flex items-center justify-center bg-primary-container text-on-primary-container">
                    <span className="material-symbols-outlined text-[64px]!">
                      account_circle
                    </span>
                  </div>
                </div>
                <button className="absolute inset-0 flex items-center justify-center bg-on-surface/40 text-surface opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                  <span className="material-symbols-outlined">
                    photo_camera
                  </span>
                </button>
              </div>
              <div className="grow w-full space-y-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">
                      Full Name
                    </label>
                    <div className="w-full py-md font-body-md text-on-surface">
                      {user.name}
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">
                      Email Address
                    </label>
                    <div className="w-full py-md font-body-md text-on-surface">
                      {user.email}
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">
                      Phone Number
                    </label>
                    <div className="w-full py-md font-body-md text-on-surface">
                      +1 (555) 000-0000
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">
                      House Adress
                    </label>
                    <div className="w-full py-md font-body-md text-on-surface">
                      {user.adress}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order History Section --> */}
          <div
            className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-xl"
            id="order-history"
          >
            <div className="flex justify-between items-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Recent Orders
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="pb-md font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="pb-md font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Date
                    </th>
                    <th className="pb-md font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Status
                    </th>
                    <th className="pb-md font-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {orders.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="py-xl text-center text-on-surface-variant"
                      >
                        No Orders Yet
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr
                        key={order._id}
                        className="order-row transition-colors"
                      >
                        <td className="py-md font-bold text-on-surface">
                          #{order._id.slice(-6).toUpperCase()}
                        </td>

                        <td className="py-md text-body-sm text-on-surface-variant">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>

                        <td className="py-md">
                          <span
                            className={`inline-flex items-center px-sm py-xs rounded-full text-[12px] font-bold uppercase tracking-wider
              ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Processing"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-amber-100 text-amber-800"
              }`}
                          >
                            {order.status}
                          </span>
                        </td>

                        <td className="py-md text-right font-bold text-on-surface">
                          ₹{order.totalPrice}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default ClientProfile;
