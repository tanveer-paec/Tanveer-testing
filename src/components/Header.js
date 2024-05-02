import FrameComponent from "./FrameComponent";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {


  const handleLogout = ()=> {
    sessionStorage.removeItem("accesstoken")
    console.log("logout is clicked")
    window.location.href = "/login";
  }

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
     {!(sessionStorage.getItem('accessToken'))? // !(localStorage.getItem("accessToken")) if user is loggedout token is false and sign in / start for free button is shown otherwise logout and settings button are shown    
     <div className={styles.userActions}>
        <div className={styles.signInActions}>
          <div className={styles.signInButton}>
            <Link role="button" to="/login"  className="btn btn-primary"><div className={styles.startForFree} className=" text-white">Sign In</div></Link>
          </div>
          <Link className="btn btn-primary" role="button" to="/signup">
          <div className={styles.startForFree} className=" text-white">Start for Free</div>
          </Link>
        </div>
      </div>:<div className={styles.userActions}>
        <div className={styles.signInActions}>
          <div className={styles.signInButton}>
            <Link role="button"  className="btn btn-primary"><div className={styles.startForFree} className="text-white" onClick={handleLogout}>LogOut</div></Link>
          </div>
          <Link className="btn btn-primary" role="button" data-bs-toggle="modal" data-bs-target="#dashboardModal">
          <div className={styles.startForFree} className="btn-sm text-white">Settings</div>
          </Link>
        </div></div>} 
    </header>
  );
};

export default Header;
