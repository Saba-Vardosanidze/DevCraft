import styles from "./Header.module.css";
export default function Header() {
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
              <a href="#">Home</a>
            </li>
            <li className={styles.navComponent}>
              <a href="#">About Me</a>
            </li>
            <li className={styles.navComponent}>
              <a href="#">Services</a>
            </li>
            <li className={styles.navComponent}>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </nav>
        <button className={styles.burgerMenu}>
          <img src="images/svg/burgerMenusvg.svg" alt="burgerMenu" />
        </button>
        <button className={styles.headerButton}>Contact Me</button>
      </header>
    </>
  );
}
