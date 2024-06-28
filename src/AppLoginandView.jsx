import { useContext } from "react";
import { storeItem } from "./components/store/ItemStore";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

const AppLoginandView = () => {
  const { logincomfirm } = useContext(storeItem);
  return <>{logincomfirm ? <HomePage /> : <Login />}</>;
};

export default AppLoginandView;
