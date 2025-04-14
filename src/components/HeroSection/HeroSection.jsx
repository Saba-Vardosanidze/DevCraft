import { useEffect } from "react";
import { heroButton } from "../../data/heroButton";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./HeroSection.module.css";
export default function HeroSection({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className={styles.herosectionContainer}>
        <div>{children}</div>
        <div className={styles.profileMainContainer}>
          {heroButton.map((eachElement, index) => (
            <a
              key={index}
              href={eachElement.href}
              className={styles[eachElement.style]}
            >
              <img src={eachElement.src} alt={eachElement.alt} />
            </a>
          ))}
          <div className={styles.fourthCircle}>
            <div className={styles.thirdCircle}>
              <div className={styles.secondRound}>
                <img
                  className={styles.mainCharacter}
                  src="/images/svg/john.svg"
                  alt="profile"
                />
              </div>
            </div>
            <div className={styles.helloContainer}>Hey 👋, i am John</div>
          </div>
        </div>
        <div className={styles.background}>
          <img
            className={styles.backgroundImage}
            src="/images/png/Background.png"
            alt="background"
          />
          <img
            className={styles.mainicon}
            src="/images/svg/mainicon.svg"
            alt="icon"
          />
          <div className={styles.aboutMe} data-aos="fade-right">
            <h2>About Me</h2>
            <p>
              I'm John, a passionate web developer with a strong desire to turn
              your digital dreams into reality. With years of experience and a
              deep love for web development.
            </p>
          </div>
          <div className={styles.crafting} data-aos="fade-left">
            <h2>Crafting Innovation</h2>
            <p>
              My mission is to craft innovative and dynamic web solutions that
              captivate your audience. I believe in the fusion of art and
              technology where every detail matters, every interaction tells a
              story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
