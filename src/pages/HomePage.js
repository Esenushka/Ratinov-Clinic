import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import OwnerBlock from "../components/OwnerBlock/OwnerBlock";
import TreatBlock from "../components/TreatBlock/TreatBlock";
import Consultaition from "../components/Consultation/Consultation";
import CourseOfTreatmentBlock from "../components/CourseOfTreatmentBlock/CourseOfTreatmentBlock";
import CommentBlock from "../components/CommentBlock/CommentBlock";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MainSlider />
      <Consultaition />
      <TreatBlock />
      <OwnerBlock />
      <YouTubeSlider />
      <CourseOfTreatmentBlock />
      <CommentBlock />
    </div>
  )
}
