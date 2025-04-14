import styles from "./Faq.module.css";
import { faq, faqRightContainer } from "../../data/faq";
import { useState } from "react";

const Faq = () => {
  const [activeItem, setActiveItem] = useState({ side: null, index: null });

  const handleClick = (side, index) => {
    setActiveItem((prevItem) =>
      prevItem.side === side && prevItem.index === index
        ? { side: null, index: null }
        : { side, index }
    );
  };

  return (
    <div className={styles.faqMainContainer}>
      <div>
        <div className={styles.starContainer}>
          <img src="/images/svg/starIcon.svg" alt="starIcon" />
          <p>FAQ</p>
        </div>
        <div className={styles.titleAndDescription}>
          <h2>Frequently Asked Questions</h2>
          <p>
            We understand you may have questions. Here are some common queries
            we've answered to make your web development journey smooth and
            informed.
          </p>
        </div>
      </div>
      <div className={styles.qAndAmainContainer}>
        <div className={styles.leftContainer}>
          {faq.map((eachElement, index) => {
            const isOpen =
              activeItem.side === "left" && activeItem.index === index;
            return (
              <div key={index} className={styles.questionAndAnswer}>
                <div className={styles.topContainer}>
                  <h2>{eachElement.title}</h2>
                  <button onClick={() => handleClick("left", index)}>
                    {isOpen ? (
                      <img src="/images/svg/minuse.svg" alt="minus" />
                    ) : (
                      <img src="/images/svg/pluse.svg" alt="plus" />
                    )}
                  </button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.description}>
                  {isOpen && <p>{eachElement.description}</p>}
                </div>
                <div
                  className={`${styles.redBlue} ${
                    isOpen ? styles.redSign : styles.blueSign
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className={styles.rightContainer}>
          {faqRightContainer.map((eachElement, index) => {
            const isOpen =
              activeItem.side === "right" && activeItem.index === index;
            return (
              <div key={index} className={styles.questionAndAnswer}>
                <div className={styles.topContainer}>
                  <h2>{eachElement.title}</h2>
                  <button onClick={() => handleClick("right", index)}>
                    {isOpen ? (
                      <img src="/images/svg/minuse.svg" alt="minus" />
                    ) : (
                      <img src="/images/svg/pluse.svg" alt="plus" />
                    )}
                  </button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.description}>
                  {isOpen && <p>{eachElement.description}</p>}
                </div>
                <div
                  className={`${styles.redBlue} ${
                    isOpen ? styles.redSign : styles.blueSign
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
