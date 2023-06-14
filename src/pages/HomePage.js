import { Suspense, lazy } from "react";
import RoundButtons from "./../components/RoundButtons/RoundButtons";
import React from "react";
import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import OwnerBlock from "../components/OwnerBlock/OwnerBlock";
import TreatBlock from "../components/TreatBlock/TreatBlock";
import Consultation from "../components/Consultation/Consultation";
import CourseOfTreatmentBlock from "../components/CourseOfTreatmentBlock/CourseOfTreatmentBlock";
import FAQ from "../components/FAQ/FAQ";
import DoctorSlider from "../components/DoctorSlider/DoctorSlider";
import CommentBlock from "../components/CommentBlock/CommentBlock";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import ResultsSlider from "../components/ResultsSlider/ResultsSlider";
import ClinicSpecialistsBlock from "../components/ClinicSpecialists/ClinicSpecialistsBlock";
import About from "../components/Consultation/About";

export default React.memo(function HomePage({
  isHeader,
  setHeader,
  about,
  setLoadingImage,
  specialists,
  faq,
}) {
  return (
    <>
      <Header isHeader={isHeader} setHeader={setHeader} />
      <>
        <MainSlider />
        <Consultation />
        <About setLoadingImage={setLoadingImage} about={about} />
        <TreatBlock />
        <OwnerBlock />
        <YouTubeSlider />
        <ResultsSlider />
        <CourseOfTreatmentBlock />
        <ClinicSpecialistsBlock specialists={specialists} />
        <DoctorSlider fullSize />
        <CommentBlock />
        <FAQ faq={faq} />
        <CallMe />
        <Footer />
        <RoundButtons />
      </>
    </>
  );
});
