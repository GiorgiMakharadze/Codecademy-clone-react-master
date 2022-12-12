import React from "react";
import OtherResources from "./OtherResources";
import CubesAndLines from "../../../assests/svg/CubesAndLines.svg";
import CubesAndLines2 from "../../../assests/svg/CubesAndLines2.svg";
import VideoPauseSymbol from "../../../assests/svg/VideoPauseSymbol.svg";

import styles from "./BestResources.module.css";

const BestResources = () => {
  return (
    <React.Fragment>
      <div className={styles.resourceContainer}>
        <div style={{ width: "27rem" }}>
          <img
            src={CubesAndLines}
            alt="cubes and lines"
            className={styles.resourcesImg}
          />
          <div className={styles.resourcesContainer}>
            <p className={styles.resourcesLink}>BLOG</p>
            <h2 className={styles.resourcesHeader}>
              How Long Does it Take to Learn to Code?
            </h2>
          </div>
        </div>
        <div style={{ width: "27rem" }}>
          <img
            src={CubesAndLines2}
            alt="cubes and lines"
            className={styles.resourcesImg}
          />
          <div className={styles.resourcesContainer}>
            <p className={styles.resourcesLink}>BLOG</p>
            <h2 className={styles.resourcesHeader}>
              What does a Data <br /> Scientist do?
            </h2>
          </div>
        </div>
        <div style={{ width: "27rem" }}>
          <img
            src={VideoPauseSymbol}
            alt="video pause symbol"
            className={styles.resourcesImg}
          />
          <div className={styles.resourcesContainer}>
            <p className={styles.resourcesLink}>VIDEO</p>
            <h2 className={styles.resourcesHeader}>
              What Programming Language Should You Learn?
            </h2>
          </div>
        </div>
      </div>
      <OtherResources />
    </React.Fragment>
  );
};

export default BestResources;
