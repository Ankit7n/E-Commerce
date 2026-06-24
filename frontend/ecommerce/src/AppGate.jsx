import { useSelector } from "react-redux";
import GlobalLoader from "./Components/Client/Loading/GlobalLoader";
import Context from "./Context";

export default function AppGate() {
  const { loading } = useSelector((state) => state.user);

  if (loading) {
    return <GlobalLoader />;
  }

  return <Context />;
}
