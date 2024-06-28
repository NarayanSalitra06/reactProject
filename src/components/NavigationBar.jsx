import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavigationBar.module.css";
import { useContext } from "react";
import { storeItem } from "./store/ItemStore";

function NavigationBar() {
  const {
    clickToLogin,
    onclickMenu,
    onclickHome,
    onclickAbout,
    onclickContact,
  } = useContext(storeItem);
  return (
    <>
      <nav className={styles.navcontainer}>
        <div className={styles.logo}>
          <img src="/images/brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li>
            <button type="button" class="btn btn-info" onClick={onclickHome}>
              Home
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-info" onClick={onclickMenu}>
              Menu
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-info" onClick={onclickAbout}>
              about
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-info" onClick={onclickContact}>
              contact
            </button>
          </li>
        </ul>
        <button className="btn btn-success " onClick={clickToLogin}>
          Login
        </button>
      </nav>
    </>
  );
}
export default NavigationBar;
