import styles from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <section className={styles.heroContent}>
      <div className={styles.frameParent}>
        <div className={styles.unlockThePowerOfAutomatedParent}>
          <h1 className={styles.unlockThePowerContainer}>
            <p className={styles.unlockThePower}>
              Unlock the Power of Automated Trading
            </p>
            <p className={styles.withStablesailsBot}>with StableSail's Bot</p>
          </h1>
          <div className={styles.experienceEfficiencyAndPrecWrapper}>
            <h3 className={styles.experienceEfficiencyAnd}>
              Experience Efficiency and Precision in Every Trade Simplify Your
              Strategy, Amplify Your Gains
            </h3>
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.startForFreeWrapper}>
            <div className={styles.startForFree}>Start for Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
