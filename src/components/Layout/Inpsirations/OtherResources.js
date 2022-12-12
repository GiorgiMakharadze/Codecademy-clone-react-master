import React from "react";
import PandImg from "../../UI/P&Img";
import GeometrycFigure from "../../../assests/svg/GeometrycFigure.svg";
import VideoPauseSymbol from "../../../assests/svg/VideoPauseSymbol.svg";

import styles from "./OtherResources.module.css";

const OtherResources = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={GeometrycFigure}
            alt="Geometric figure"
            className={styles.mainImg}
          />
        </div>
        <div className={styles.rightTxt}>
          <PandImg name="ARTICLE" headerTxt="What is Programming?" />
          <PandImg
            name="VIDEO"
            headerTxt="Learn From Home Day: Intro to JavaScriptp-the Language of the Internet!"
          />
          <PandImg name="VIDEO" headerTxt="What is Front-End?" />
          <PandImg name="BLOG" headerTxt="Myspace and the Coding Legancy?" />
        </div>
      </div>
      <div className={styles.lastResources}>
        <p className={styles.lastRecoursesLink}>ARTICLE</p>
        <h2 className={styles.lastResourcesHeadres}>
          Consider Design While You Build
        </h2>
        <img
          src={VideoPauseSymbol}
          alt="Video pause symbol"
          className={styles.lastResourcesImg}
        />
        <PandImg name="VIDEO" headerTxt="What is Back-End?" />
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.fullCatalogBtn}>See Full Catalog</button>
      </div>
    </React.Fragment>
  );
};

export default OtherResources;
