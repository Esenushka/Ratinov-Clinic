import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import OwnerBlock from "../components/OwnerBlock/OwnerBlock";
import ResultsBlock from "../components/ResultsBlock/ResultsBlock";
import TreatBlock from "../components/TreatBlock/TreatBlock";
import Consultaition from "../components/Consultation/Consultation";
import CourseOfTreatmentBlock from "../components/CourseOfTreatmentBlock/CourseOfTreatmentBlock";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MainSlider />
      <OwnerBlock/>
      <TreatBlock />
      <ResultsBlock/>
      <Consultaition />
      <TreatBlock />
      <OwnerBlock />
      <YouTubeSlider />
      <CourseOfTreatmentBlock />
    </div>
  )
}
