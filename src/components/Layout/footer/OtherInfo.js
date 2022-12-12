import styles from "./OtherInfo.module.css";

const RESOURCES = [
  "Projects",
  "Interview Challanges",
  "Docs",
  "Cheatsheets",
  "Aticles",
  "Videos",
  "Blog",
  "Career Center",
];

const COMMUNITY = [
  "Forums",
  "Discord",
  "Chapters",
  "Events",
  "Learnet Stories",
];

const OtherInfo = () => {
  return (
    <div className={styles.otherContainer}>
      <div className={styles.resourceContainer}>
        <p className={styles.headerTxt}>RESOURCES</p>
        <div className={styles.containerResources}>
          {RESOURCES.map((item) => (
            <p className={styles.ptext}>{item}</p>
          ))}
        </div>

        <p className={styles.headerTxt}>INDIVIDUAL PLANS</p>
        <p className={styles.ptext}>Pro Membership</p>
        <p className={styles.ptext}>For Students</p>

        <p className={styles.headerTxt}>SUPPORT</p>
        <p className={styles.ptext}>Help Center</p>
      </div>
      <div className={styles.otherContainer2}>
        <p className={styles.headerTxt}>COMMUNITY</p>
        {COMMUNITY.map((item) => (
          <p className={styles.ptext}>{item}</p>
        ))}
        <div className={styles.containerPlan}>
          <p className={styles.headerTxt}>ENTERPRISE PLANS</p>
          <p className={styles.ptext}>Buisness Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
