import React, { useState } from "react";
import TopCareerCard from "./TopCareerCards";
import TopCareerCard2 from "./TopCareerCards2";
import styles from "./AllCareerCards.module.css";
const AllCareerCards = () => {
  const [showPageOne, setShowPageOne] = useState(true);
  const [showPageTwo, setShowPageTwo] = useState(false);

  const pageAllHandler = () => {
    setShowPageOne((prevShowPageOne) => !prevShowPageOne);
  };

  return (
    <div>
      <button onClick={pageAllHandler} className={styles.pagesBtn}>
        Show All Career Paths
      </button>

      {!showPageOne && <TopCareerCard />}
      {!showPageTwo && <TopCareerCard2 />}
    </div>
  );
};

export default AllCareerCards;
