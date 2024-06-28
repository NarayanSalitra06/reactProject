import { Children, createContext, useState } from "react";

const userAuth = {
  email: "narayan@gmail",
  pass: "asdfasdf",
};

export const storeItem = createContext([]);

const ItemStore = ({ children }) => {
  const [logincomfirm, setlogincomfirm] = useState("Home");
  const onclicklogin = (emailuser, password) => {
    if (emailuser === userAuth.email && password === userAuth.pass) {
      setlogincomfirm("Home");
      console.log(emailuser);
      console.log(password);
      return;
    }
  };
  const clickToLogin = () => {
    setlogincomfirm("Login");
  };
  const onclickMenu = () => {
    setlogincomfirm("Menu");
  };
  const onclickHome = () => {
    setlogincomfirm("Home");
  };
  const onclickAbout = () => {
    setlogincomfirm("About");
  };
  const onclickContact = () => {
    setlogincomfirm("Contact");
  };
  return (
    <>
      <storeItem.Provider
        value={{
          onclicklogin,
          logincomfirm,
          clickToLogin,
          onclickMenu,
          onclickHome,
          onclickAbout,
          onclickContact,
        }}
      >
        {children}
      </storeItem.Provider>
    </>
  );
};

export default ItemStore;
