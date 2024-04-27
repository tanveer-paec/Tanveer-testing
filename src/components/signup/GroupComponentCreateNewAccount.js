import { useState } from "react";
import styles from "./GroupComponentCreateNewAccount.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const GroupComponentCreateNewAccount = () => {
  const [credentials, setCredentials] = useState({email: "", password: "", username:"faizan2"})

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
    //setCredentials.username("credentials.email")
    console.log(credentials)}
    const submit = ()=> {
      axios.get('http://localhost:8000/users/')
      .then(res=> {
        console.log(res)
      }).catch(err=> {
        console.log(err)
      })
    }

  return (
    <div className={styles.rectangleParent} style={{ }}>
      <div className={styles.frameChild} />
      <div className={styles.signupTitle}>
        <h1 className={styles.createAnAccount}>Create an account</h1>
        <div className={styles.enterYourEmail}>
          Enter your email to sign up to StableSail
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.email}>Email</div>
        <div className={styles.inputField}>
        <input type="email" className={styles.inputField} style={{display: "inline-block", minWidth: "100%", background: "rgba(0, 0, 0, 0.2)", paddingLeft: "10px"}} placeholder="name@example.com" defaultValue="mdo@example.com" id="email" name="email" onChange={onChange}/>

        <input type="password" className={styles.inputField} style={{display: "inline-block", minWidth: "100%", background: "rgba(0, 0, 0, 0.2)", paddingLeft: "10px"}} placeholder="password" id="password" name="password" onChange={onChange}/>
          <div className={styles.emailAddress}>
</div>
        </div>
      </div>
      <Link role="button" to="/signup1" className={styles.inputField1} onClick={submit} style={{border: "var(--color-cadetblue-200)"}}>
        <div className={styles.password}>Password</div>
        <div className={styles.signUpWith}>Sign up with email</div>
      </Link>
      <div className={styles.socialLogin}>
        <div className={styles.socialIcons}>
          <div className={styles.iconShapes} />
        </div>
        <div className={styles.orContinueWith}>or continue with</div>
        <div className={styles.socialIcons1}>
          <div className={styles.socialIconsChild} />
        </div>
      </div>
      <div className={styles.googleLogin}>
        <div className={styles.loginregisterWith}>
          <img className={styles.googleIcon} alt="" src="/google.svg" />
          <div className={styles.google}>Google</div>
        </div>
        <div className={styles.byClickingContinueContainer}>
          <span>{`By clicking continue, you agree to our `}</span>
          <span className={styles.termsOfService}>Terms of Service</span>
          <span>{` and `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default GroupComponentCreateNewAccount;
