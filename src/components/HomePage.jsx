import { useContext } from "react";
import Hero from "./Hero";
import NavigationBar from "./NavigationBar";
import { storeItem } from "./store/ItemStore";
import Login from "./Login";

const HomePage = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
    </>
  );
};
export default HomePage;
