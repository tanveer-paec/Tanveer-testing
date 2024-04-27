import { useState } from "react";
import styles from "../GroupComponentCreateNewAccount.module.css";
import { Link } from "react-router-dom";

const GroupComponentCreatePassword = () => {
  const [createPass, setcreatePass] = useState({ pass: "", verPass: "" });
  const onChange = (e) => {
    setcreatePass({ ...createPass, [e.target.name]: e.target.value });
    console.log(createPass);
  };
  const submit = () => {
    console.log(createPass);
  };

  return (
    <div className={styles.rectangleParent} style={{}}>
      <div className={styles.frameChild} />
      <div className={styles.signupTitle}>
        <h1 className={styles.createAnAccount}>Create Password</h1>
        <div className={styles.enterYourEmail}>Create a strong password</div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.email}>Password</div>
        <div className={styles.inputField}>
          <input
            type="password"
            className={styles.inputField}
            style={{
              display: "inline-block",
              minWidth: "100%",
              background: "rgba(0, 0, 0, 0.2)",
              paddingLeft: "10px",
            }}
            id="pass"
            name="pass"
            onChange={onChange}
          />
          <div className={styles.emailAddress}></div>
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.email}> Verify Password</div>
        <div className={styles.inputField}>
          <input
            type="password"
            className={styles.inputField}
            style={{
              display: "inline-block",
              minWidth: "100%",
              background: "rgba(0, 0, 0, 0.2)",
              paddingLeft: "10px",
            }}
            id="verPass"
            name="verPass"
            onChange={onChange}
          />
          <div className={styles.emailAddress}></div>
        </div>
      </div>
      <Link
        role="button"
        to="/signup2"
        className={styles.inputField1}
        onClick={submit}
        style={{ border: "var(--color-cadetblue-200)" }}
      >
        <div className={styles.password}>Password</div>
        <div className={styles.signUpWith}>Confirm</div>
      </Link>
    </div>
  );
};

export default GroupComponentCreatePassword;
