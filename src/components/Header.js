import FrameComponent from "./FrameComponent";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <FrameComponent />
      <div className={styles.navigation}>
        <div className={styles.navigationLinks}>
          <Link to="/" className={styles.home} className="text-decoration-none text-white">Home</Link>
          <div className={styles.howItWorks}>How it Works</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.aboutUs}>About us</div>
        </div>
      </div>
      <div className={styles.userActions}>
        <div className={styles.signInActions}>
          <div className={styles.signInButton}>
            <Link role="button" to="/login" className={styles.signIn} className="text-white">Sign in</Link>
          </div>
          <Link className={styles.startForFreeWrapper} role="button" to="/signup">
            <div className={styles.startForFree} className="btn-sm text-white">Start for Free</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
