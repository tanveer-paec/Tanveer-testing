
import Footer from "../../Footer";
import styles from "../../.././pages/css/CreateNewAccount.module.css";
import Header from "../../Header";
import SignupAreaCreatePassword from "./SignupAreaCreatePassword";

const CreatePassword = () => {
  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} />
        <Header />
        <SignupAreaCreatePassword />
        <Footer />
      </main>
    </div>
  );
};

export default CreatePassword;
