import { Outlet } from "react-router-dom";
import Header from "../Admin/Header/Header";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AdminLayout;
