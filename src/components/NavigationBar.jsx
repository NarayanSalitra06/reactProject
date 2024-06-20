import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <>
      <nav className={styles.navcontainer}>
        <div className={styles.logo}>
          <img src="/images/brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li>Menu</li>
          <li>location</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <button className="btn btn-info ">Login</button>
      </nav>
    </>
  );
}
export default NavigationBar;
