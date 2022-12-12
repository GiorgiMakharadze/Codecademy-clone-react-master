import React from "react";
import Card from "../../UI/Card";
import CardCareer from "../../UI/CardCareer";
import FrontEnd from "../../../assests/svg/FrontEnd.svg";
import ComputerScience from "../../../assests/svg/ComputerScience.svg";
import FullStackEngineer from "../../../assests/svg/FullStackEngineer.svg";
import BI from "../../../assests/svg/BI.svg";

const TopCareerCard2 = () => {
  return (
    <React.Fragment>
      <Card>
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Front-End Engineer"
          lessonsTxt="Beginer friendly, "
          boldTxt="131"
          lastWordTxt="lessons"
          descriptionTxt="Front-end engineers work closely with designers to make websites beautiful,functional, and fast."
          src={FrontEnd}
          alt="front-end"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Computer Science"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 82"
          lastWordTxt="lessons"
          descriptionTxt="Theory behind programming! Master Phyton while learning data structures,algorithms,and more!"
          src={ComputerScience}
          alt="computer-science"
          essentialsTxt="Fundations"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Full-Stack Engineer"
          lessonsTxt="Beginer friendly, "
          boldTxt="170"
          lastWordTxt="lessons"
          descriptionTxt="A full-stack engineer can get a project done from start to finish, back-end to front-end."
          src={FullStackEngineer}
          alt="full-stack"
          essentialsTxt="Job Essentials"
        />
      </Card>
      <Card>
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Business Intelligance"
          lessonsTxt="Beginer friendly,"
          boldTxt=" 46 "
          lastWordTxt="lessons"
          descriptionTxt="BI analysts can to programm tools and data models to help visualize or monitor data."
          src={BI}
          alt="Business Intelligance"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Full-Stack for Business"
          lessonsTxt="Beginer friendly, "
          boldTxt="142"
          lastWordTxt="lessons"
          descriptionTxt="Full-stacks can assist you in bringing your minimal viable product to market on autopilot."
          src={FullStackEngineer}
          alt="full-stack"
          essentialsTxt="Job Essentials"
        />
      </Card>
    </React.Fragment>
  );
};

export default TopCareerCard2;
