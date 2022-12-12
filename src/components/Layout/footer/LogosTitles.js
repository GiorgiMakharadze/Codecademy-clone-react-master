import ImgLogos from "../../UI/ImgLogos";
import logo from "../../../assests/svg/codecademy-logo.com.svg";
import GooglePlayIcon from "../../../assests/svg/googleplay.svg";
import AppleStoreIcon from "../../../assests/svg/applestore.svg";
import twitter from "../../../assests/svg/twitter.svg";
import facebook from "../../../assests/svg/facebook.svg";
import Instagram from "../../../assests/svg/Instagram.svg";
import YouTube from "../../../assests/svg/YouTube.svg";
import styles from "./LogosTitles.module.css";

const LogosTitles = () => {
  return (
    <div className={styles.mainLogosContainer}>
      <div className={styles.containerOne}>
        <img src={logo} alt="codecademy logo" className={styles.logoImg} />
        <p className={styles.containerOneTxt}>About</p>
        <p className={styles.containerOneTxt}>Careers</p>
        <p className={styles.containerOneTxt}>Affiliates</p>
        <div>
          <ImgLogos src={twitter} alt="twitter company logo" />
          <ImgLogos src={facebook} alt="facebook company logo" />
          <ImgLogos src={Instagram} alt="Unstagram company logo" />
          <ImgLogos src={YouTube} alt="YouTube company logo" />
          <div className={styles.secondatyContainer}>
            <p>MOBILE</p>
            <img
              src={AppleStoreIcon}
              alt="Apple company logo"
              className={styles.logo}
            />
            <img
              src={GooglePlayIcon}
              alt="Google company logo"
              className={styles.logo2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosTitles;
