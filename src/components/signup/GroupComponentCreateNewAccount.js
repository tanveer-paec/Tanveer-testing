import { useState } from "react";
import styles from "./GroupComponentCreateNewAccount.module.css";
import { Link, useNavigation } from "react-router-dom";
import axios from "axios";

const GroupComponentCreateNewAccount = () => {
  const [credentials, setCredentials] = useState({email: "", password: "", username:"", verification_code: ""})
  const [step, setStep] = useState(1);
 // const navigate = useNavigation();
  
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
    //setCredentials({...credentials, username: e.target.value})
    //setCredentials.username("credentials.email")
    console.log(credentials)}

    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log(credentials);
      // You can perform any validation before proceeding to the next step
  
      // If it's the final step, submit the form data to the backend API
      if (step === 2) {
        // Submit form data to backend API
        const credentials_signup = {email: credentials.email, username: credentials.username, password: credentials.password}
        console.log('Submitting form data to backend API');
        axios.post('http://localhost:8000/users/', credentials_signup)
        .then(res => {
          console.log(res)
         // history.push('/login');
        }).catch(err => {
          console.log(err)
        })
        
      } else {
        // Otherwise, proceed to the next step
        handleNextStep();
      }

      if (step === 3) {
        // Submit form data to backend API
        const credentials_verification = {email: credentials.email, verification_code: credentials.verification_code}
        console.log('credentials_verification', credentials_verification);
        axios.post('http://localhost:8000/verify/', credentials_verification)
        .then(res => {
          console.log(res)
         // history.push('/login');
        }).catch(err => {
          console.log(err)
        })     
        // Reset Fields
        setCredentials({
          username: '',
          email: '',
          password: ''
        })   
      } else {
        // Otherwise, proceed to the next step
        handleNextStep();
      }
    };
    
    // const submit = ()=> {
    //   axios.get('http://localhost:8000/users/')
    //   .then(res=> {
    //     console.log(res)
    //   }).catch(err=> {
    //     console.log(err)
    //   })
    // }

  return (
    <>
    {step === 1 && (
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

        <input type="text" className={styles.inputField}  style={{display: "inline-block", minWidth: "100%", background: "rgba(0, 0, 0, 0.2)", paddingLeft: "10px"}} placeholder="username" id="username" name="username" onChange={onChange}/>
          <div className={styles.emailAddress}>
</div>
        </div>
      </div>
      <Link role="button" className={styles.inputField1} onClick={handleSubmit} style={{border: "var(--color-cadetblue-200)"}}>
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
    )}

    {step === 2 && (
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
             id="password"
             name="password"
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
         onClick={handleSubmit}
         style={{ border: "var(--color-cadetblue-200)" }}
       >
         
         <div className={styles.signUpWith}>Confirm</div>
       </Link>
     </div>
    )}
    {step === 3 && (<div className={styles.rectangleParent} style={{ }}>
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
        <input  className={styles.inputField} style={{display: "inline-block", minWidth: "100%", background: "rgba(0, 0, 0, 0.2)", paddingLeft: "10px"}}  id="verification_code" name="verification_code" onChange={onChange}/>
          <div className={styles.emailAddress}>
</div>
        </div>
      </div>
      <Link role="button" to="/signup3" className={styles.inputField1} onClick={handleSubmit} style={{border: "var(--color-cadetblue-200)"}}>
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
    )}

{step === 4 && (
  <div className="">
  <div className={styles.rectangleParent} style={{}}>
    <div className={styles.frameChild} />
    <div className={styles.signupTitle}>
      <h1 className={styles.createAnAccount}>Enter API</h1>
    </div>
    {/* dropdown */}

    <div className={styles.emailInput}>
      <div className={styles.inputField}>
        <div
          className="dropdown"
          style={{
            height: "inherit",
            width: "100%",
            borderRadius: "inherit",
            borderColor: "inherit",
          }}
        >
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              height: "inherit",
              width: "100%",
              borderRadius: "inherit",
              borderColor: "inherit",
            }}
          >
            Dropdown button
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style={{
              backgroundColor: "grey",
              width: "100%",
              borderRadius: "inherit",
              borderColor: "inherit",
            }}
          >
            <li>
              <a className="dropdown-item text-white" href="#">
                Binance
              </a>
            </li>
            <li>
              <a className="dropdown-item text-white" href="#">
                ByBit
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.emailAddress}></div>
      </div>
    </div>

    <div className={styles.emailInput}>
      <div className={styles.email}> API Key</div>
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
      <div className={styles.email}> API Secret</div>
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
      to="/signup1"
      className={styles.inputField1}
      onClick={handleSubmit}
      style={{ border: "var(--color-cadetblue-200)" }}
    >
      <div className={styles.password}>Password</div>
      <div className={styles.signUpWith}>Confirm</div>
    </Link>
  </div>
</div>
)}

    </>
  );
};

export default GroupComponentCreateNewAccount;
