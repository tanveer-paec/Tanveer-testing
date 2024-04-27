import { useState } from "react";
import styles from "../GroupComponentCreateNewAccount.module.css";
import { Link } from "react-router-dom";

const GroupComponentEmailConfirmation = () => {
  const [emailVerCode, setemailVerCode] = useState({code: ""})
  const onChange = (e)=>{
    setemailVerCode({...emailVerCode, [e.target.name]: e.target.value})
    console.log(emailVerCode)}
    const submit = ()=> {
      console.log(emailVerCode)
    }

  return (
    <div className={styles.rectangleParent} style={{ }}>
      <div className={styles.frameChild} />
      <div className={styles.signupTitle}>
        <h1 className={styles.createAnAccount}>Confirm Email</h1>
        <div className={styles.enterYourEmail}>
          Enter your verification code
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.email}>Enter Code</div>
        <div className={styles.inputField}>
        <input  className={styles.inputField} style={{display: "inline-block", minWidth: "100%", background: "rgba(0, 0, 0, 0.2)", paddingLeft: "10px"}}  id="code" name="code" onChange={onChange}/>
          <div className={styles.emailAddress}>
</div>
        </div>
      </div>
      <Link role="button" to="/signup3" className={styles.inputField1} onClick={submit} style={{border: "var(--color-cadetblue-200)"}}>
        <div className={styles.password}>Password</div>
        <div className={styles.signUpWith}>Confirm</div>
      </Link>
      <div className={styles.socialLogin}>
        <div className={styles.socialIcons}>
          <div className={styles.iconShapes} />
        </div>
        <div className={styles.orContinueWith}>Resend Code (60sec)</div>
        <div className={styles.socialIcons1}>
          <div className={styles.socialIconsChild} />
        </div>
      </div>
    </div>
  );
};

export default GroupComponentEmailConfirmation;
