import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import ItemStore, { storeItem } from "./components/store/ItemStore";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <ItemStore>
        <HomePage />
      </ItemStore>
    </>
  );
}

export default App;
