import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  imageRemovebgPreview71,
  dashboard,
  theStableSailDashboardIsT,
  propPadding,
  propPadding1,
  propHeight,
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const imageRemovebgPreview71Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const dashboardStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <div className={styles.dashboardsImage}>
        <div className={styles.rectangleGroup} style={groupDiv1Style}>
          <div className={styles.frameItem} />
          <img
            className={styles.imageRemovebgPreview71}
            alt=""
            src={imageRemovebgPreview71}
            style={imageRemovebgPreview71Style}
          />
        </div>
      </div>
      <div className={styles.dashboardGuide}>
        <div className={styles.dashboardHeadings}>
          <h1 className={styles.dashboard} style={dashboardStyle}>
            {dashboard}
          </h1>
        </div>
        <div className={styles.theStablesailDashboard}>
          {theStableSailDashboardIsT}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
