import { useContext } from "react";
import Hero from "./Hero";
import NavigationBar from "./NavigationBar";
import { storeItem } from "./store/ItemStore";
import Login from "./Login";
import MenuList from "../MenuList";
import About from "./About";
import Contact from "./Contact";

const HomePage = () => {
  const { logincomfirm } = useContext(storeItem);
  return (
    <>
      <NavigationBar></NavigationBar>
      {logincomfirm === "Home" ? (
        <Hero></Hero>
      ) : logincomfirm === "Login" ? (
        <Login />
      ) : logincomfirm === "Menu" ? (
        <MenuList />
      ) : logincomfirm === "About" ? (
        <About />
      ) : logincomfirm === "Contact" ? (
        <Contact />
      ) : null}
    </>
  );
};
export default HomePage;
