import GroupComponentCreatePassword from "./GroupComponentCreatePassword";
import styles from "../SignupArea.module.css";

const SignupAreaEmailConfirmation = () => {
  return (
    <section className={styles.signupArea}>
      <GroupComponentCreatePassword />
    </section>
  );
};

export default SignupAreaEmailConfirmation;
