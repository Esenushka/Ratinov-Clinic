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
import Footer from "../components/Footer/Footer";
import ResultsSlider from "../components/ResultsSlider/ResultsSlider";
import ClinicSpecialistsBlock from "../components/ClinicSpecialists/ClinicSpecialistsBlock";
import About from "../components/Consultation/About";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import Preloader from "../components/Preloader/Preloader";

export default React.memo(function HomePage() {
  const [about, setAbout] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [comments, setComments] = useState([]);
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
        })
        setAbout(aboutArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      });
    db.collection("clinicSpecialists")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const specialistsArr = [];
        snapshot.forEach((doc) => {
          specialistsArr.push({ ...doc.data(), id: doc.id });
        });
        setSpecialists(specialistsArr)
      });
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = []
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        })
        setDoctors(doctorsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      });
    db.collection("comments")
      .get()
      .then((snapshot) => {
        const commentsArr = []
        snapshot.forEach((doc) => {
          commentsArr.push({ ...doc.data(), id: doc.id });
        })
        setComments(commentsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
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
        setLoading(false)
      });
  }, []);
  return (
    <div>
      <Preloader loadingImage={loadingImage} loading={loading} />
      <Header />
      <MainSlider />
      <Consultaition />
      <About about={about} />
      <TreatBlock />
      <OwnerBlock />
      <YouTubeSlider />
      <ResultsSlider />
      <CourseOfTreatmentBlock />
      <ClinicSpecialistsBlock specialists={specialists} />
      <DoctorSlider doctors={doctors} />
      <CommentBlock setLoadingImage={setLoadingImage} comments={comments} />
      <FAQ faq={faq} />
      <CallMe />
      <Footer />
    </div>
  )
}
)