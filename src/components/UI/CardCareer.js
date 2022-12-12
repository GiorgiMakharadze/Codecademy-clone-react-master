import styles from "./CardCareer.module.css";

const CardCareer = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.frontEnd}>
        <p className={styles.career}>
          <span className={styles.pro}>{props.boldTxtPro}</span> {props.mainTxt}
        </p>
        <h2 className={styles.title}>{props.h2Txt}</h2>
        <p className={styles.lessons}>
          <span className={styles.bull}>&bull;</span>
          {props.lessonsTxt}
          <span className={styles.boldText}>{props.boldTxt}</span>
          {props.lastWordTxt}
        </p>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{props.descriptionTxt}</p>
        </div>
        <img src={props.src} alt={props.alt} className={styles.frontEndImg} />
        <p className={styles.essentials}>{props.essentialsTxt}</p>
      </div>
    </div>
  );
};

export default CardCareer;
