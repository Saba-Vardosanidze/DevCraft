import { useEffect } from "react";
import style from "./PortfolioList.module.css";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { portfolio } from "../../data/portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortfolioList() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={style.portfolioListContainer}>
      <div>
        <div className={style.starContainer}>
          <img src="/images/svg/starIcon.svg" alt="starIcon" />
          <p>Portfolio List</p>
        </div>
        <div className={style.titleAndDescription}>
          <h2>My Work Showcase</h2>
          <p>
            Explore a selection of my best projects, showcasing the creative and
            functional solutions I provide. Each project represents a unique
            challenge and a successful outcome.
          </p>
        </div>
      </div>
      <div>
        <div className={style.embla} ref={emblaRef}>
          <div className={style.embla__container}>
            {portfolio.map((eachELement, index) => (
              <div
                className={style.embla__slide}
                key={index}
                data-aos="fade-up"
              >
                <img
                  className={style.mainCardIcons}
                  src={eachELement.cardIcon}
                  alt="cardIcon"
                />
                <div className={style.photoContainer}>
                  <img src={eachELement.image} alt={eachELement.title} />
                </div>
                <div className={style.cardBottomPart}>
                  <div className={style.titleContainer}>
                    <p>{eachELement.title}</p>
                    <img src={eachELement.icon} alt="arrowicon" />
                  </div>
                  <p className={style.description}>{eachELement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.bottomMainContainer}>
          <div className={style.line}></div>
          <div className={style.buttonsMainContainer}>
            <div className={style.empty}></div>
            <div className={style.buttonContainer}>
              <div className={style.buttonOutBorder}>
                <button className={style.embla__prev} onClick={scrollPrev}>
                  <img
                    className={style.leftButton}
                    src="/images/svg/Arrow.svg"
                    alt="starIcon"
                  />
                </button>
              </div>
              <div className={style.buttonOutBorder}>
                <button className={style.embla__next} onClick={scrollNext}>
                  <img src="/images/svg/Arrow.svg" alt="starIcon" />
                </button>
              </div>
            </div>
            <div className={style.allProject}>
              <p>View All Projects</p>
              <img src="/images/svg/Arrow.svg" alt="starIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
