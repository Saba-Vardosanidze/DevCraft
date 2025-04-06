import style from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.starContainer}>
        <img src="/images/svg/starIcon.svg" alt="starIcon" />
        <p>Welcome to DevCraft Portfolio</p>
      </div>
      <div className={style.welcomeTitle}>
        <h2>Turning Your Web Dreams Into Reality </h2>
        <p>
          I bring a well-rounded skill set to the table, making me a versatile
          web developer. Here's a glimpse of my capabilities
        </p>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.blackButton}>View Portfolio</button>
        <button className={style.purpleButton}>Contact Me</button>
      </div>
      <p className={style.companies}>Companies I’ve Worked With</p>
      <div
        className={style.slider}
        style={{ "--width": "100px", "--height": "50px", "--quantity": "10" }}
      >
        <div className={style.list}>
          <div className={style.item} style={{ "--position": 1 }}>
            <img src="images/svg/discordRename.svg" alt="discord" />
          </div>
          <div className={style.item} style={{ "--position": 2 }}>
            <img src="images/svg/webFlow.svg" alt="webFlow" />
          </div>
          <div className={style.item} style={{ "--position": 3 }}>
            <img src="images/svg/asanaLogo.svg" alt="asana" />
          </div>
          <div className={style.item} style={{ "--position": 4 }}>
            <img src="images/svg/slackLogo.svg" alt="slackLogo" />
          </div>
          <div className={style.item} style={{ "--position": 5 }}>
            <img src="images/svg/atlasianLogo.svg" alt="atlasianLogo" />
          </div>
          <div className={style.item} style={{ "--position": 6 }}>
            <img src="images/svg/confluence.svg" alt="confluence" />
          </div>
          <div className={style.item} style={{ "--position": 7 }}>
            <img src="images/svg/discordRename.svg" alt="discordRename" />
          </div>
          <div className={style.item} style={{ "--position": 8 }}>
            <img src="images/svg/webFlow.svg" alt="webFlow" />
          </div>
          <div className={style.item} style={{ "--position": 9 }}>
            <img src="images/svg/asanaLogo.svg" alt="asana" />
          </div>
          <div className={style.item} style={{ "--position": 10 }}>
            <img src="images/svg/slackLogo.svg" alt="slackLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
