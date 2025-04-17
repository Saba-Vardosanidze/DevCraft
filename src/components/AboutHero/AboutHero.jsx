import { motion } from "motion/react";
import styles from "./AboutHero.module.css";
const AboutHero = () => {
  return (
    <div
      className={` ${styles.mainContainer} flex justify-center items-center lg:bg-no-repeat bg-none shadow-[inset_0px_1px_0px_rgba(255,255,255,0.1),_inset_1px_0px_0px_rgba(255,255,255,0.07),_inset_-1px_0px_0px_rgba(255,255,255,0.07)] m-auto mt-[64px] rounded-[16px] max-w-[358px] lg:max-w-[1360px] min-h-[933px] lg:min-h-[577px]`}
    >
      <div className="flex lg:flex-row-reverse flex-col items-center">
        <img
          className="lg:ml-[50px] max-w-[298px] lg:max-w-[455px] min-h-[319px] lg:min-h-[457px]"
          src="/images/png/portfoliaOwner.png"
          alt="portfoliaOwner"
        />
        <div className="flex flex-col items-center lg:items-start lg:min-h-[407px]">
          <div className="flex justify-center items-center gap-[6px] shadow-[inset_0_0_12px_4px_#0b0b47,inset_0px_1px_0px_#fff] mt-[40px] lg:mt-[0px] rounded-[8px] w-full max-w-[224px] h-[45px] text-[14px] text-white">
            <img src="/images/svg/starIcon.svg" alt="starIcon" />
            Freelance Web Developer
          </div>
          <h2 className="flex mt-[10px] max-w-[290px] lg:max-w-[735px] min-h-[84px] text-[28px] text-white lg:text-[48px] text-center lg:text-start">
            Hello
            <motion.div
              animate={{ rotate: [0, -8, 8, -8, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.div>
            , I'm John Doe.
          </h2>
          <p className="mt-[8px] max-w-[298px] lg:max-w-[735px] min-h-[84px] text-[#b3b3b3] text-[14px] lg:text-[16px] text-center lg:text-start">
            Greetings! I'm John Doe, a freelance web developer based in
            Cityville. My journey into web development began with a strong
            educational foundation in computer science, holding a bachelor's
            degree from Cityville University.
          </p>

          <div className="flex flex-wrap justify-center items-center lg:gap-16px bg-[linear-gradient(225deg,_rgba(255,255,255,0.04)_0%,_rgba(255,255,255,0)_25%,_rgba(255,255,255,0)_75%,_rgba(255,255,255,0.04)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.1),_inset_1px_0px_0px_rgba(255,255,255,0.07),_inset_-1px_0px_0px_rgba(255,255,255,0.07)] mt-[30px] lg:mt-[40px] pt-[10px] lg:pt-[0px] rounded-[16px] lg:w-[100%] max-w-[298px] lg:max-w-[735px] min-h-[209px] lg:min-h-[154px]">
            <div className="w-[123px] lg:w-[156px]">
              <p className="font-bold text-[30px] text-white lg:text-[45px]">
                12+
              </p>
              <p className="text-[#98989A] text-[14px]">Years Of Experience</p>
            </div>
            <div className="w-[103px] lg:w-[156px]">
              <p className="font-bold text-[30px] text-white lg:text-[45px]">
                80+
              </p>
              <p className="text-[#98989A] text-[14px]">Completed Projects</p>
            </div>
            <div className="w-[123px] lg:w-[156px]">
              <p className="lg:w-[156px] font-bold text-[30px] text-white lg:text-[45px]">
                20+
              </p>
              <p className="text-[#98989A] text-[14px]">Happy Clients</p>
            </div>
            <div className="w-[123px] lg:w-[156px]">
              <p className="font-bold text-[30px] text-white lg:text-[45px]">
                10+
              </p>
              <p className="text-[#98989A] text-[14px]">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
