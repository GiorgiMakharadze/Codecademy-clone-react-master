import React from "react";
import CourseCatalog from "./CourseCatalog";
import LogosTitles from "./LogosTitles";
import OtherInfo from "./OtherInfo";
import BottomFooter from "./BottomFooter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <LogosTitles />
          <OtherInfo />
        </div>
        <CourseCatalog />
      </div>
      <BottomFooter />
    </React.Fragment>
  );
};

export default Footer;
