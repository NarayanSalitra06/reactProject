import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Login.module.css";
import { useContext, useRef } from "react";
import { storeItem } from "./store/ItemStore";
const Login = () => {
  const loginEmail = useRef();
  const password = useRef();
  const { onclicklogin } = useContext(storeItem);
  const hendleinsubmit = (event) => {
    event.preventDefault();
    const loginEmail2 = loginEmail.current.value;
    const pass = password.current.value;
    onclicklogin(loginEmail2, pass);
  };

  return (
    <>
      <form className={css.login} onSubmit={hendleinsubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={loginEmail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
