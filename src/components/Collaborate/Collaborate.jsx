import styles from "./Collaborate.module.css";
import { collaborateIcons } from "../../data/collaborate";
export default function Collaborate() {
  return (
    <div className={styles.collaborateMainContainer}>
      <div className={styles.iconContainer}>
        {collaborateIcons.map((eachElement) => (
          <div className={styles.outContainer}>
            <div className={styles.photoContainer}>
              <a href={eachElement.link}>
                <img src={eachElement.icon} alt={eachElement.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.titleAndDescription}>
        <h2>Let's Collaborate</h2>
        <p>
          Ready to start your web project or have questions? I'm just a message
          away. Let's discuss your ideas and bring them to life. Reach out for a
          free consultation.
        </p>
      </div>
      <button className={styles.headerButton}>Contact Me</button>
    </div>
  );
}
