import { offeredContainer } from "../../data/offered";
import styles from "./Offered.module.css";
const Offered = () => {
  return (
    <div className={styles.offerMainContainer}>
      <div className={styles.serviceOffer}>
        <img src="/images/svg/serviceOfferedIcon.svg" alt="starIcon" />
        <p>Services Offered</p>
      </div>
      <div className={styles.offerTitleContainer}>
        <h2>Elevate Your Digital Presence</h2>
        <p>
          Discover the spectrum of digital solutions we offer. From captivating
          design to seamless development and optimization, we're your path to
          digital excellence.
        </p>
      </div>
      <div className={styles.opportunityContainer}>
        {offeredContainer.map((eachElement) => (
          <div className={styles.myOpportunity}>
            <div className={styles.opportunityLogo}>
              <div className={styles.iconContainer}>
                <img src={eachElement.img} alt={eachElement.alt} />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTitle}>
                <h2>{eachElement.title}</h2>
                <img src={eachElement.arrow} alt={eachElement.arrowAlt} />
              </div>
              <p>{eachElement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offered;
