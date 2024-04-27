import { useMemo } from "react";
import styles from "./GroupComponentDashboard.module.css";

const GroupComponentDashboard = ({ groupHeaderPadding, groupHeaderWidth }) => {
  const groupHeaderStyle = useMemo(() => {
    return {
      padding: groupHeaderPadding,
      width: groupHeaderWidth,
    };
  }, [groupHeaderPadding, groupHeaderWidth]);

  return (
    <header className={styles.rectangleParent} style={groupHeaderStyle}>
      <div className={styles.frameChild} />
      <div className={styles.logoBar}>
        <img
          className={styles.stablesailLogo2Icon}
          loading="lazy"
          alt=""
          src="/stablesail-logo-2@2x.png"
        />
        <div className={styles.stablesailWrapper}>
          <div className={styles.stablesail}>StableSail</div>
        </div>
      </div>
      <div className={styles.navigationLinks}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.howItWorks}>How it Works</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.aboutUs}>About us</div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponentDashboard;
