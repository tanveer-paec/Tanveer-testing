import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.stablesailLogo2Parent} style={frameDivStyle}>
      <img
        className={styles.stablesailLogo2Icon}
        loading="lazy"
        alt=""
        src="/stablesail-logo-2@2x.png"
      />
      <div className={styles.brandName}>
        <div className={styles.stablesail}>StableSail</div>
      </div>
    </div>
  );
};

export default FrameComponent;
