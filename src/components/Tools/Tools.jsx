import style from "./Tools.module.css";
import { tools } from "../../data/tools";

export default function Tools() {
  return (
    <div className={style.toolsMainContainer}>
      <div>
        <div className={style.starContainer}>
          <img src="/images/svg/starIcon.svg" alt="starIcon" />
          <p>Tools & Technologies</p>
        </div>
        <div className={style.titleAndDescription}>
          <h2>Tools & Technologies I Use</h2>
          <p>
            Discover the key tools and technologies I wield to craft innovative
            web solutions, from front-end design to powerful back-end
            development and efficient data management
          </p>
        </div>
      </div>
      <div className={style.toolsCardContainer}>
        {tools.map((eachElement) => (
          <div className={style.toolsContainer}>
            <div className={style.cardContainer}>
              <div>
                <div className={style.cardTopContainer}>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon1} alt={eachElement.title} />
                    </div>
                  </div>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon2} alt={eachElement.title} />
                    </div>
                  </div>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon3} alt={eachElement.title} />
                    </div>
                  </div>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon4} alt={eachElement.title} />
                    </div>
                  </div>
                </div>
                <div className={style.cardBottomContainer}>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon5} alt={eachElement.title} />
                    </div>
                  </div>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon6} alt={eachElement.title} />
                    </div>
                  </div>
                  <div className={style.outContainer}>
                    <div className={style.photoContainer}>
                      <img src={eachElement.icon7} alt={eachElement.title} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.toolsDescriptionContainer}>
                <h2>{eachElement.title}</h2>
                <p>{eachElement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
