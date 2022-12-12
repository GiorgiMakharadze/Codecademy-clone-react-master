import React from "react";
import Card from "../../UI/Card";
import CardCareer from "../../UI/CardCareer";
import MachineLearningSpecialist from "../../../assests/svg/MachineLearningSpecialist.svg";
import DataAnalysis from "../../../assests/svg/DataAnalysis.svg";
import BackEnd from "../../../assests/svg/BackEnd.svg";
import IosDeveloper from "../../../assests/svg/IosDeveloper.svg";
import InferenceDataScientist from "../../../assests/svg/InferenceDataScientist.svg";
import AIEngineer from "../../../assests/svg/AIEngineer.svg";
import NaturalLanguage from "../../../assests/svg/NaturalLanguage.svg";
import DataEngineer from "../../../assests/svg/DataEngineer.svg";

const TopCareerCard = () => {
  return (
    <React.Fragment>
      <Card>
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Data Scientist: Machine Learning Speacialist"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 81 "
          lastWordTxt="lessons"
          descriptionTxt="Machine Learning Data Scientists solve problems,make predictions, find patters and more!Machine learning is a subfield of artificial intelligence,its defined as the capability of a machine to imitate intelligent human behavior. "
          src={MachineLearningSpecialist}
          alt="Machine learning"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt=" Learn Data Analysis for Your Buissnes"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 67 "
          lastWordTxt="lessons"
          descriptionTxt="Data analysis is the process of cleaning, analyzing, and visualizing data, with the goal of discovering valuable insights and driving smarter business decisions. Learn Phyton and SQL, and build skills you need!"
          src={DataAnalysis}
          alt="Data Analysis"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Data Scientist: Analytics Specialist"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 69 "
          lastWordTxt="lessons"
          descriptionTxt="Data Analytics and Analytics Data Scientists use Phython and SQL to query, analyze and visualize data - and communicate findings.A data scientist may design the way data is stored, manipulated and analyzed."
          src={DataAnalysis}
          alt="Analytics Specialist"
          essentialsTxt="Job Essentials"
        />
      </Card>
      <Card>
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Back-End Engineer"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 123"
          lastWordTxt="lessons"
          descriptionTxt="Back-end developers deal with the hidden processes that run behinde the scenes!"
          src={BackEnd}
          alt="Back-End Engineer"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="IOS Developer"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 51 "
          lastWordTxt="lessons"
          descriptionTxt="Learn how to use Swift and SwiftUI to build Modern strong IOS Applications."
          src={IosDeveloper}
          alt="computer-science"
          essentialsTxt="iOS"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Inference Data Scientist"
          lessonsTxt="Beginer friendly, "
          boldTxt=" 77 "
          lastWordTxt="lessons"
          descriptionTxt="Inferece Data Scientists run A/B tests, do root-cause analysis,and conduct experiments."
          src={InferenceDataScientist}
          alt="full-stack"
          essentialsTxt="Job Essentials"
        />
      </Card>
      <Card>
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Machine Learning/AI Engineer Career Path"
          lessonsTxt="Beginer friendly,"
          boldTxt=" 39 "
          lastWordTxt="lessons"
          descriptionTxt="An AI engineer builds AI models using machine learning algorithms and deep learning neural networks to draw business insights."
          src={AIEngineer}
          alt="Machine Learning/AI Engineer Career Path"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Natural Language Procesing Specialist"
          lessonsTxt="Beginer friendly,"
          boldTxt=" 84 "
          lastWordTxt="lessons"
          descriptionTxt="NLP is a field of data science and artificial intelligence that studies how computers and languages interact."
          src={NaturalLanguage}
          alt="Natural Language Procesing"
          essentialsTxt="Job Essentials"
        />
        <CardCareer
          boldTxtPro="PRO"
          mainTxt="Career Path"
          h2Txt="Data Engineer"
          lessonsTxt="Beginer friendly,"
          boldTxt=" 67 "
          lastWordTxt="lessons"
          descriptionTxt="Data Engineers procure data from numerous resources and convert.The same followed by building and managing systems that generate this data."
          src={DataEngineer}
          alt="Data Engineer"
        />
      </Card>
    </React.Fragment>
  );
};

export default TopCareerCard;
