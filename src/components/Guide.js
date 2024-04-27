import GroupComponent from "./GroupComponent";
import styles from "./Guide.module.css";

const Guide = () => {
  return (
    <section className={styles.guide}>
      <div className={styles.guideInfo}>
        <div className={styles.setupGuides}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.aPIKeyImage}>
              <img
                className={styles.aPIKeyImageChild}
                loading="lazy"
                alt=""
                src="/group-13@2x.png"
              />
            </div>
            <div className={styles.accountSettingsGuide}>
              <div className={styles.accountGuideInfo}>
                <h1 className={styles.apiKeySetup}>API Key Setup Guide</h1>
              </div>
              <div className={styles.learnHowTo}>
                Learn how to set up your API keys for Binance and Bybit to get
                started
              </div>
            </div>
          </div>
          <GroupComponent
            imageRemovebgPreview71="/imageremovebgpreview-7-1@2x.png"
            dashboard="Dashboard"
            theStableSailDashboardIsT="The StableSail Dashboard is the nerve center for your trading  activities, offering a seamless and intuitive interface that brings  unparalleled control to your fingertips."
          />
        </div>
        <div className={styles.setupGuides1}>
          <GroupComponent
            imageRemovebgPreview71="/imageremovebgpreview-10-1@2x.png"
            dashboard="Account Settings"
            theStableSailDashboardIsT="The Account Settings section of the StableSail platform is meticulously  designed to give users complete control over their personal and trading  bot configurations."
            propPadding="var(--padding-11xl) var(--padding-lgi) var(--padding-38xl)"
            propPadding1="var(--padding-smi) var(--padding-11xs)"
            propHeight="64px"
            propWidth="86px"
            propWidth1="244px"
          />
          <GroupComponent
            imageRemovebgPreview71="/imageremovebgpreview-11-1@2x.png"
            dashboard="Bot's Customization"
            theStableSailDashboardIsT="Setting up the bot settings on the StableSail platform is designed to be  an intuitive and straightforward experience, ensuring users can  effectively automate their trading strategies with minimal intervention."
            propPadding="var(--padding-11xl) var(--padding-lgi)"
            propPadding1="var(--padding-6xs) var(--padding-sm) var(--padding-7xs) var(--padding-mini)"
            propHeight="77px"
            propWidth="61px"
            propWidth1="285px"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
