import styles from "./CourseCatalog.module.css";

const SUBJECTS = [
  "Web Development",
  "Data Science",
  "Computer Science",
  "Developer Tools",
  "Machine Learning",
  "Code Foundations",
  "Web Design",
  " − ",
  "Full Catalog",
  "Beta Content",
  "Roadmap",
];

const LANGUAGES = [
  "HTML & CSS",
  "Python",
  "JavaScript",
  "Java",
  "SQL",
  "Bash/Shell",
  "Ruby",
];

const LANGUAGES2 = ["C++", "R", "C#", "PHP", "Go", "Swift", "Kotlin"];

const CourseCatalog = () => {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.courseCatalog}>
        <div className={styles.containerSubjects}>
          <p className={styles.catalogTxt}>COURSE CATALOG</p>
          <p className={styles.subjectsTxt}>Subjects</p>
          {SUBJECTS.map((item) => (
            <p className={styles.catalogTxtHover}>{item}</p>
          ))}
        </div>
      </div>
      <div className={styles.languageContainer}>
        <div className={styles.courseLanguages}>
          <p className={styles.subjectsTxt}>Languages</p>
          {LANGUAGES.map((item) => (
            <p className={styles.catalogTxtHover}>{item}</p>
          ))}
        </div>
        <div className={styles.courseLanguages2}>
          {LANGUAGES2.map((item) => (
            <p className={styles.catalogTxtHover}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
