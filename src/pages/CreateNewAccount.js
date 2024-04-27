import Header from "../components/Header";
import SignupArea from "../components/signup/SignupArea";
import Footer from "../components/Footer";
import styles from "./css/CreateNewAccount.module.css";

const CreateNewAccount = () => {
  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} />
        <Header />
        <SignupArea />
        <Footer />
      </main>
    </div>
  );
};

export default CreateNewAccount;
