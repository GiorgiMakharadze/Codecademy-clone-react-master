import React from "react";
import Sidebar from "../navBar/Sidebar";
import Quizbar from "../navBar/Quizbar";
import AllCareerCards from "../programsCards/AllCareerCards";
import MostPopular from "../programsCards/MostPopularCards";
import NoteWorhy from "../programsCards/NoteWorthy";
import GetInspired from "../Inpsirations/GetInspired";
import Footer from "../footer/Footer";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <main className={styles.mainContent}>
          <Quizbar />
          <h2 className={styles["explore__catalog"]}>Explore Catalog</h2>
          <h3 className={styles["top__path"]}>Top career paths</h3>
          <div>
            <AllCareerCards />
            <MostPopular />
            <NoteWorhy />
            <GetInspired />
            <Footer />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
