import { Outlet } from "react-router-dom";
import Footer from "../Client/Footer/Footer";
import Header from "../Client/Header/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
