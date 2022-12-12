import styles from "./P&Img.module.css";
const PandImg = (props) => {
  return (
    <div>
      <div className={styles.headersContainer}>
        <p className={styles.inpiredLink}>{props.name}</p>
        <h2 className={styles.inpiredHeadres}>{props.headerTxt}</h2>
      </div>
    </div>
  );
};

export default PandImg;
