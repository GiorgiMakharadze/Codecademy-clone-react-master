import Card from "../../UI/Card";
import CardPopular from "../../UI/CardPopular";
import styles from "./NoteWorthy.module.css";

const NoteWorhy = () => {
  return (
    <div>
      <h1 className={styles.h1Text}>New + noteworthy</h1>
      <Card>
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn TypeScript"
          lessonsTxt="Intermediate"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Phyton Case Study"
          lessonsTxt="Begineer friendly, "
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn Recommender Systems"
          lessonsTxt="Intermediate, "
          boldText=" 1  "
          lastWordTxt="lesson"
        />
      </Card>
      <Card>
        <CardPopular
          courseTxt="Course"
          h2Txt="Choosing a Career in Tech"
          lessonsTxt="Begineer friendly, "
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn PHP"
          lessonsTxt="Intermediate, "
          boldText=" 2  "
          lastWordTxt="lessons"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Choosing a Language"
          lessonsTxt="Begineer friendly, "
        />
      </Card>
    </div>
  );
};

export default NoteWorhy;
