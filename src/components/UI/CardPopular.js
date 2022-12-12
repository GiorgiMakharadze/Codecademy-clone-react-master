import styles from "./CardPopular.module.css";

const CardPopular = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.courseText}>{props.courseTxt}</p>
      <h2 className={styles.title}>{props.h2Txt}</h2>
      <p className={styles.lesson}>
        <span className={styles.bull}>&bull;</span>
        {props.lessonsTxt}
        <span className={styles.boldTxt}>{props.boldText}</span>
        {props.lastWordTxt}
      </p>
      <p className={styles.essentials}>
        <span className={styles.fluencyTxt}>{props.essentialsTxt}</span>
      </p>
    </div>
  );
};

export default CardPopular;
