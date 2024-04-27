import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import Guide from "../components/Guide";
import Footer from "../components/Footer";
import styles from "./css/HOME.module.css";

const HOME = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.pageContentIcon}
        alt=""
        src="/page-content@2x.png"
      />
      <Header />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <HeroContent />
        <Guide />
        <Footer />
      </main>
    </div>
  );
};

export default HOME;
