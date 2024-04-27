
import Footer from "../../Footer";
import styles from "../../.././pages/css/CreateNewAccount.module.css";
import Header from "../../Header";
import SignupAreaAPI from "./SignupAreaAPI";

const API = () => {
  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} />
        <Header />
        <SignupAreaAPI />
        <Footer />
      </main>
    </div>
  );
};

export default API;
