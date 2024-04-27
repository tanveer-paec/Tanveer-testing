import GroupComponentCreateNewAccount from "./GroupComponentCreateNewAccount";
import styles from "./SignupArea.module.css";

const SignupArea = () => {
  return (
    <section className={styles.signupArea}>
      <GroupComponentCreateNewAccount />
    </section>
  );
};

export default SignupArea;
