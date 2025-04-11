import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div>
      <img
        className={styles.siteLogo}
        src="images/svg/mainicon.svg"
        alt="siteLogo"
      />
      <footer className={styles.footerContainer}>
        <div className={styles.line}></div>
        <div className={styles.footerContentContainer}>
          <div className={styles.security}>
            <p>Privacy Policy</p>
            <div className={styles.middleLine}></div>
            <p>Terms & Conditions</p>
          </div>
          <nav className={styles.headerNavigationBar}>
            <ul>
              <li className={styles.navComponent}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.navComponent}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.navComponent}>
                <Link href="#">Portfolio</Link>
              </li>
              <li className={styles.navComponent}>
                <Link href="#">Services</Link>
              </li>
              <li className={styles.navComponent}>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
          <p className={styles.shortDescription}>
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
