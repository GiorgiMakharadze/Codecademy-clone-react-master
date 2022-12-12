import React from "react";
import styles from "./Quizbar.module.css";
import quizSvg_1 from "../../../assests/svg/quiz/quiz-2.svg";
import quizSvg_2 from "../../../assests/svg/quiz/quiz-1.svg";
import quizSvg_bg from "../../../assests/svg/quiz/quiz-bg.svg";

const Quizbar = () => {
  return (
    <div className={styles.quizContainer}>
      <img src={quizSvg_1} alt="quiz svg" className={styles["quizSvg_1"]} />
      <img
        src={quizSvg_bg}
        alt="quiz svg"
        className={styles["quizSvg_2--bg"]}
      />
      <div className={styles.quizTxt}>
        <p className={styles.begin}>Not sure where to begin?</p>
        <p className={styles.quiz}>Take our quiz →</p>
      </div>

      <img src={quizSvg_2} alt="quiz svg" className={styles["quizSvg_2"]} />
    </div>
  );
};

export default Quizbar;
