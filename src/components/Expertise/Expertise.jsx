import style from "./Expertise.module.css";
import { expertise } from "../../data/expertise";
export default function Expertise() {
  return (
    <div className={style.expertiseMainContainer}>
      <div>
        <div className={style.starContainer}>
          <img src="/images/svg/starIcon.svg" alt="starIcon" />
          <p>Services</p>
        </div>
        <div className={style.titleAndDescription}>
          <h2>My Expertise</h2>
          <p>
            I bring a well-rounded skill set to the table, making me a versatile
            web developer. Here's a glimpse of my capabilities
          </p>
        </div>
      </div>
      <div className={style.cardMainContainer}>
        <div className={style.line}></div>
        {expertise.map((eachElement) => (
          <div className={style.cardContainer}>
            <div className={style.imageContainer}>
              <img src={eachElement.img} alt={eachElement.alt} />
            </div>
            <div className={style.cardDescription}>
              <h2>{eachElement.title}</h2>
              <p>{eachElement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
