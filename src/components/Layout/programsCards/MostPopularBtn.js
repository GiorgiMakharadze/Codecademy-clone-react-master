 import React, { useState } from "react";
import DownArrow from "../../../assests/svg/down-arrow.svg";
import styles from "./MostPopularBtn.module.css";

const freePaidCourses = ["Free + Paid Courses", "Free Courses", "Paid Courses"];

const allLevels = [" All levels", "Begginer", "Intermediate"];

const PopularBtn = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showLevels, setShowLevels] = useState(false);

  const showCoursesHandler = () => {
    setShowCourses((prevShowCourses) => !prevShowCourses);
  };

  const showLevelsHandler = () => {
    setShowLevels((prevShowLevels) => !prevShowLevels);
  };

  return (
    <div className={styles.btnContainer}>
      <div className={styles.coursesContainer}>
        <button className={styles.btn} onClick={showCoursesHandler}>
          <p className={styles.pTxt}>Free + Paid Courses</p>
          <img src={DownArrow} alt="arrow icon" className={styles.arrow} />
        </button>

        {showCourses && (
          <div className={styles.coursesItem}>
            {freePaidCourses.map((item) => (
              <button className={styles.btnCourses}>{item}</button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.lvlContainer}>
        <button className={styles.btn} onClick={showLevelsHandler}>
          <p className={styles.pTxt}>All Levels</p>
          <img src={DownArrow} alt="arrow icon" className={styles.arrow1} />
        </button>
        {showLevels && (
          <div className={styles.coursesItem}>
            {allLevels.map((item) => (
              <button className={styles.btnCourses}>{item}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularBtn;
