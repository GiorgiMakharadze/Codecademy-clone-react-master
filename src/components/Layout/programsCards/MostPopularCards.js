import PopularBtn from "./MostPopularBtn";
import Card from "../../UI/Card";
import CardPopular from "../../UI/CardPopular";

const PopularCards = [];

const MostPopular = () => {
  return (
    <div>
      <h2 style={{ marginTop: "4rem", fontSize: "2rem" }}>
        Most popular courses
      </h2>
      <PopularBtn />
      <Card>
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn HTML"
          lessonsTxt="Begineer friendly, "
          boldText=" 6 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn Phyton"
          lessonsTxt="Begineer friendly, "
          boldText=" 14  "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn JavaScript"
          lessonsTxt="Begineer friendly, "
          boldText=" 11 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
      </Card>
      <Card>
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn Java"
          lessonsTxt="Begineer friendly, "
          boldText=" 6 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn Phyton 2"
          lessonsTxt="Begineer friendly, "
          boldText=" 20 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn SQL"
          lessonsTxt="Begineer friendly, "
          boldText=" 4 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
      </Card>
      <Card>
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn C++"
          lessonsTxt="Begineer friendly, "
          boldText=" 13 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn CSS"
          lessonsTxt="Begineer friendly, "
          boldText=" 8 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
        <CardPopular
          courseTxt="Course"
          h2Txt="Learn C#"
          lessonsTxt="Begineer friendly, "
          boldText=" 20 "
          lastWordTxt="lessons"
          essentialsTxt="Language Fluency"
        />
      </Card>
    </div>
  );
};

export default MostPopular;
