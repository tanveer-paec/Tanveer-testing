import FrameComponent from "./FrameComponent";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer4}>
      <div className={styles.footerContent}>
        <div className={styles.footerBranding}>
          <FrameComponent propGap="15px" />
          <div className={styles.subscribe}>
            <div className={styles.subscribeToOur}>
              Subscribe to our newsletter
            </div>
            <div className={styles.subscribeInput}>
              <div className={styles.inputBox} />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.subscribe1}>Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.siteLinks}>
          <div className={styles.frameParent}>
            <div className={styles.productParent}>
              <div className={styles.product}>Product</div>
              <div className={styles.linkColumns}>
                <div className={styles.overview}>Overview</div>
                <div className={styles.features}>Features</div>
                <div className={styles.solutions}>Solutions</div>
                <div className={styles.tutorials}>Tutorials</div>
                <div className={styles.pricing}>Pricing</div>
              </div>
            </div>
            <div className={styles.companyParent}>
              <div className={styles.company}>Company</div>
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.press}>Press</div>
                <div className={styles.news}>News</div>
                <div className={styles.mediaKit}>Media Kit</div>
              </div>
            </div>
            <div className={styles.resourcesParent}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.blogParent}>
                <div className={styles.blog}>Blog</div>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.events}>Events</div>
                <div className={styles.helpCentre}>Help Centre</div>
                <div className={styles.tutorials1}>Tutorials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <img
          className={styles.socialIcons}
          loading="lazy"
          alt=""
          src="/vector-15.svg"
        />
        <div className={styles.legal}>
          <div className={styles.legalLinks}>
            <div className={styles.termsCondition}>{`Terms & Condition`}</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
          <div className={styles.copyright2024All}>
            ©Copyright 2024. All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
