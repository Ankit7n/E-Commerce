import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import ClientAuthLoader from "./Auth/ClientAuthLoader";
import AdminBootstrap from "./Auth/AdminBootstrap";
import AppGate from "./AppGate";

export default function App() {
  return (
    <BrowserRouter>
      <ClientAuthLoader />
      <AdminBootstrap />
      <AppGate />
    </BrowserRouter>
  );
}
