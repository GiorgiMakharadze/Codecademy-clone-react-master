import styles from "./BottomFooter.module.css";

const BottomFooter = () => {
  return (
    <div>
      <div className={styles.bottomFooterContainer}>
        <div className={styles.policysContainer}>
          <a className={styles.bottomTxt}>Privace Policy | </a>
          <a className={styles.bottomTxt}>Cookie Policy | </a>
          <a className={styles.bottomTxt}>
            Do Not Sell My Personall Information |
          </a>
          <a className={styles.bottomTxt}> Terms</a>
        </div>
        <div>
          <p className={styles.bottomFooterTxt}>
            Made By
            <a
              href="https://github.com/GiorgiMakharadze?tab=repositories"
              className={styles.giorgi}
            >
              Giorgi Makharadze
            </a>
            With ❤️ in Tbilisi © 2022 Codecademy
          </p>
        </div>
      </div>
      <p className={styles.copyright}>
        © This is a clone of the site Codecademy ! I claim no copyright to the
        content posted here!
      </p>
    </div>
  );
};

export default BottomFooter;
