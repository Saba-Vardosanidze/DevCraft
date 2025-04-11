import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Hamburger from "hamburger-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <a href="#">
          <img
            className={styles.logo}
            src="/images/svg/Logo.svg"
            alt="siteLogo"
          />
        </a>
        <nav className={styles.headerNavigationBar}>
          <ul>
            <li className={styles.navComponent}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navComponent}>
              <Link to="/about">About Me</Link>
            </li>
            <li className={styles.navComponent}>
              <Link href="#">Services</Link>
            </li>
            <li className={styles.navComponent}>
              <Link href="#">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.burgerMenu} onClick={toggleMenu}>
          <Hamburger color="white" size={25} />
        </button>
        <button className={styles.headerButton}>Contact Me</button>
      </header>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ""}`}>
        <ul>
          <li className={styles.listComponent}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={styles.listComponent}>
            <Link to="/about" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li className={styles.listComponent}>
            <a href="#" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className={styles.listComponent}>
            <a href="#" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li className={styles.listButton}>
            <button className={styles.mobileContactBtn} onClick={toggleMenu}>
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
