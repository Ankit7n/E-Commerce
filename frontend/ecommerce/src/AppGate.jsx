import { useSelector } from "react-redux";
import Context from "./Context";
import Loader from "./Components/Client/Loading/Loader";

export default function AppGate() {
  const { loading } = useSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  return <Context />;
}
