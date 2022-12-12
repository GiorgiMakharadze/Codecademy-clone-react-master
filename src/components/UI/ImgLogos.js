import styles from "./ImgLogos.module.css";
const ImgLogos = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={styles.internetLogos} />
  );
};

export default ImgLogos;
