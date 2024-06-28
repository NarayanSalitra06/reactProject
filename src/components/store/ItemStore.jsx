import { Children, createContext, useState } from "react";

const userAuth = {
  email: "narayan@gmail",
  pass: "asdfasdf",
};

export const storeItem = createContext([]);

const ItemStore = ({ children }) => {
  const [logincomfirm, setlogincomfirm] = useState(false);
  const onclicklogin = (emailuser, password) => {
    if (emailuser === userAuth.email && password === userAuth.pass) {
      setlogincomfirm(true);
      console.log(emailuser);
      console.log(password);
      return;
    }
  };
  return (
    <>
      <storeItem.Provider value={{ onclicklogin, logincomfirm }}>
        {children}
      </storeItem.Provider>
    </>
  );
};

export default ItemStore;
