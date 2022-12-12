import React, { useState } from "react";
import DownArrow from "../../../assests/svg/down-arrow.svg";
import styles from "./Sidebar.module.css";

const languages = [
  "HTML & CSS",
  "Python",
  "JavaScript",
  "Java",
  "SQL",
  "Bash/Shell",
  "Ruby",
  "C++",
  "R",
  "C#",
  "PHP",
  "Go",
  "Swift",
  "Kotlin",
];

const subjects = [
  "Web development",
  "Data Science",
  "Computer Science",
  "Cybersecurity",
  "Developer Tools",
  "Machine Learning",
  "Code Foundations",
  "Web design",
  "Game Development",
  "Mobile Development",
  "Data Visualization",
  "Interview Prep",
  "Math",
  "Cloud Computing",
  "DevOps",
  "AI",
  "Data Engineering",
  "Data Analytics",
  "IT",
  "Open Saurce",
  "For Business",
  "Beta Catalog",
  "Full Catalog",
  "Where do I begin",
];

const Sidebar = () => {
  const [showLanguages, setShowLanguages] = useState(true);
  const [showSubjects, setShowSubjects] = useState(true);

  const showLanguagesHandler = () => {
    setShowLanguages((prevShowLanguages) => !prevShowLanguages);
  };

  const showSubjectsHandler = () => {
    setShowSubjects((prevShowSubjects) => !prevShowSubjects);
  };

  return (
    <div className={styles.sidebarContainer}>
      <button className={styles["btn__lftbar"]} onClick={showLanguagesHandler}>
        Languages
        <img src={DownArrow} alt="arrow icon" className={styles.arrowIcon} />
      </button>
      {showLanguages && (
        <p className={styles["sidebar__languages"]}>
          {languages.map((lang) => (
            <a href="#">{lang}</a>
          ))}
        </p>
      )}

      <br />

      <button className={styles["btn__lftbar"]} onClick={showSubjectsHandler}>
        Subjects
        <img src={DownArrow} alt="arrow icon" className={styles.arrowIcon} />
      </button>
      {showSubjects && (
        <p className={styles["sidebar__languages"]}>
          {subjects.map((lang) => (
            <a href="#">{lang}</a>
          ))}
        </p>
      )}
    </div>
  );
};

export default Sidebar;
