import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import OwnerBlock from "../components/OwnerBlock/OwnerBlock";
import TreatBlock from "../components/TreatBlock/TreatBlock";
import Consultaition from "../components/Consultation/Consultation";
import CourseOfTreatmentBlock from "../components/CourseOfTreatmentBlock/CourseOfTreatmentBlock";
import FAQ from "../components/FAQ/FAQ";
import DoctorSlider from "../components/DoctorSlider/DoctorSlider";
import CommentBlock from "../components/CommentBlock/CommentBlock";
import CallMe from "../components/CallMe/CallMe";
import ResultsSlider from "../components/ResultsSlider/ResultsSlider";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MainSlider />
      <Consultaition />
      <TreatBlock />
      <OwnerBlock />
      <YouTubeSlider />
      <ResultsSlider />
      <CourseOfTreatmentBlock />
      <DoctorSlider />
      <CommentBlock />
      <FAQ />
      <CallMe />
    </div>
  )
}
