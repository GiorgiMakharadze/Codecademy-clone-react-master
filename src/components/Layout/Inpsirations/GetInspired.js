import React from "react";
import BestResources from "./BestResources";
import PandImg from "../../UI/P&Img";
import resourseImg from "../../../assests/Img/resources.png";
import styles from "./GetInspired.module.css";

const GetInspired = () => {
  return (
    <React.Fragment>
      <div className={styles.inspiredContainer}>
        <h1 className={styles.inspiredHeader}>Get inspired</h1>
        <PandImg name="VIDEO" headerTxt="What is a Programing Language?" />
        <PandImg
          name="BLOG"
          headerTxt="Our First Mobile Development Path Has Arrived"
        />
        <PandImg name="VIDEO" headerTxt="How to Tink Like a Programmer" />
        <PandImg
          name="VIDEO"
          headerTxt="How Long Does it Take to Learn to Code?"
        />

        <div style={{ display: "flex", height: "2rem" }}>
          <img
            src={resourseImg}
            alt="many tools images"
            className={styles.inspiredImg}
          />

          <div className={styles.headerResources}>
            <p className={styles.inpiredLink}>RESOURCES</p>
            <h2 className={styles.resourcesHeadres}>
              Our best resources for students
            </h2>
          </div>
        </div>
        <BestResources />
      </div>
    </React.Fragment>
  );
};

export default GetInspired;
