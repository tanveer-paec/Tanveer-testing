import { useState } from "react";
import styles from "../GroupComponentCreateNewAccount.module.css";
import { Link } from "react-router-dom";

const GroupComponentCreatePassword = () => {
  const [createPass, setcreatePass] = useState({ pass: "", verPass: "" }); //to change
  const onChange = (e) => {
    setcreatePass({ ...createPass, [e.target.name]: e.target.value });
    console.log(createPass);
  };
  const submit = () => {
    console.log(createPass);
  };

  return (
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
          onClick={submit}
          style={{ border: "var(--color-cadetblue-200)" }}
        >
          <div className={styles.password}>Password</div>
          <div className={styles.signUpWith}>Confirm</div>
        </Link>
      </div>
    </div>
  );
};

export default GroupComponentCreatePassword;
