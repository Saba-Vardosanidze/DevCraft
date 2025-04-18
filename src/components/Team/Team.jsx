import { team } from "../../data/team";

export default function Team() {
  return (
    <div className="flex flex-col items-center mx-auto mt-[150px] w-full font-manrope">
      <div>
        <div className="flex justify-center items-center gap-[6px] bg-[radial-gradient(circle,#04041a_0%,#050523_100%)] bg-[url('/images/png/stars.png')] shadow-[inset_0_0_12px_4px_#0b0b47,inset_0px_1px_0px_#fff] mx-auto rounded-[8px] w-[115px] h-[45px] text-[14px] text-white">
          <img src="/images/svg/starIcon.svg" alt="starIcon" />
          <p>Team</p>
        </div>
        <div className="mt-[14px] text-center">
          <h2 className="font-bold text-[28px] text-white lg:text-[48px]">
            Collaborative Expertise
          </h2>
          <p className="text-[#B3B3B3] text-[14px] text-paragraph lg:text-[16px]">
            I bring a well-rounded skill set to the table, making me a versatile
            web developer. Here's a glimpse of my capabilities
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-[40px] bg-[linear-gradient(90deg,rgba(85,71,235,0)_0%,rgba(85,71,235,0.04)_50%,rgba(85,71,235,0)_100%)] mx-auto mt-[40px] w-full max-w-[1280px]">
        <div className="bg-[linear-gradient(90deg,rgba(85,71,235,0)_0%,rgba(85,71,235,1)_50%,rgba(255,255,255,0)_100%)] w-full max-w-[1280px] h-[2px]" />

        {team.map((eachElement, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col items-center bg-[linear-gradient(225deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,rgba(255,255,255,0.04)_100%)] mx-auto border border-white/10 rounded-[16px] w-full max-w-[318px] lg:max-w-[620px] h-[256px] lg:h-[145px]"
          >
            <div className="bg-[radial-gradient(circle,rgba(85,71,235,0.835)_0%,rgba(62,51,174,0.392)_0%,rgba(62,51,173,0.1)_39%,rgba(61,50,171,0.01)_63%,rgba(60,50,170,0)_67%,rgba(36,30,106,0)_80%,rgba(5,5,26,0)_100%)]">
              <img src={eachElement.img} alt={eachElement.alt} />
            </div>
            <div className="px-4 max-w-[270px] lg:max-w-[470px] lg:text-left text-center">
              <h2 className="font-semibold text-[16px] text-white lg:text-[18px]">
                {eachElement.title}
              </h2>
              <p className="mt-[10px] text-[#B3B3B3] text-[14px] text-paragraph lg:text-[16px]">
                {eachElement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
