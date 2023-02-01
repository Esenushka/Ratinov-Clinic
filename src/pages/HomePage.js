import { Suspense, lazy } from "react";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import Preloader from "../components/Preloader/Preloader";
import RoundButtons from "../components/RoundButtons/RoundButtons";


const Header = lazy(() => import('../components/Header/Header'))
const MainSlider = lazy(() => import("../components/MainSlider/MainSlider"))
const YouTubeSlider = lazy(() => import("../components/YouTubeSlider/YouTubeSlider"))
const OwnerBlock = lazy(() => import("../components/OwnerBlock/OwnerBlock"))
const TreatBlock = lazy(() => import("../components/TreatBlock/TreatBlock"))
const Consultaition = lazy(() => import("../components/Consultation/Consultation"))
const CourseOfTreatmentBlock = lazy(() => import("../components/CourseOfTreatmentBlock/CourseOfTreatmentBlock"))
const FAQ = lazy(() => import("../components/FAQ/FAQ"))
const DoctorSlider = lazy(() => import("../components/DoctorSlider/DoctorSlider"))
const CommentBlock = lazy(() => import("../components/CommentBlock/CommentBlock"))
const CallMe = lazy(() => import("../components/CallMe/CallMe"))
const Footer = lazy(() => import("../components/Footer/Footer"))
const ResultsSlider = lazy(() => import("../components/ResultsSlider/ResultsSlider"))
const ClinicSpecialistsBlock = lazy(() => import("../components/ClinicSpecialists/ClinicSpecialistsBlock"))
const About = lazy(() => import("../components/Consultation/About"))


export default React.memo(function HomePage() {
  const [about, setAbout] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    db.collection("about")
      .get()
      .then((snapshot) => {
        const aboutArr = [];
        snapshot.forEach((doc) => {
          aboutArr.push({ ...doc.data(), id: doc.id });
        });
        setAbout(
          aboutArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
      });
    db.collection("clinicSpecialists")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const specialistsArr = [];
        snapshot.forEach((doc) => {
          specialistsArr.push({ ...doc.data(), id: doc.id });
        });
        setSpecialists(specialistsArr);
      });

    db.collection("faq")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const faqArr = [];
        snapshot.forEach((doc) => {
          faqArr.push({ ...doc.data(), id: doc.id });
        });
        setFaq(faqArr);
        setLoading(false);
      });
  }, []);
  return (
    <Suspense fallback={<Preloader loadingImage={loadingImage} loading={loading} />}>
        <Header />
        <MainSlider />
        <Consultaition />
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
        {loading || loadingImage ? "" : <RoundButtons />}
    </Suspense>
  );
});
