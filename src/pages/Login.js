import Header from "../components/Header";
import LoginArea from "../components/login/LoginArea";
import Footer from "../components/Footer";
import styles from "./css/CreateNewAccount.module.css";

const Login = () => {
  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} />
        <Header />
        <LoginArea />
        <Footer />
      </main>
    </div>
  );
};

export default Login;
