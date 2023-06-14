import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { db } from "../src/config/firebase";
import "./App.css";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JointPage from "./pages/services/JointPage";
import CommentPage from "./pages/CommentPage";
import SpinePage from "./pages/services/SpinePage";
import ServicesPage from "./pages/ServicesPage";
import PricePage from "./pages/PricePage";
import MassagePage from "./pages/services/MassagePage";
import PhysiotherapyPage from "./pages/services/PhysiotherapyPage";
import StocksPage from "./pages/StocksPage";
import BotulinumPage from "./pages/services/BotulinumPage";
import RehabilitationPage from "./pages/services/RehabilitationPage";
import TherapeuticPage from "./pages/services/TherapeuticPage";
import ConsultationPage from "./pages/ConsultationPage";
import DoctorPage from "./pages/DoctorPage";
import Blog from "../src/Blog/BLog";
import BlogMore from "./Blog/BlogMore";
import ReactGa from "react-ga";
const DoctorsPage = lazy(() => import("./pages/DoctorsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ResultPage = lazy(() => import("./pages/ResultPage"));
const Preloader = lazy(() => import("./components/Preloader/Preloader"));

const TRACING_ID = "UA-217458288-1";

ReactGa.initialize(TRACING_ID);

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const [about, setAbout] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [faq, setFaq] = useState([]);
  const [isHeader, setHeader] = useState(true);

  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
    db.collection("faq")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const faqArr = [];
        snapshot.forEach((doc) => {
          faqArr.push({ ...doc.data(), id: doc.id });
        });
        setFaq(faqArr);
        setHeader(true);
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
    setLoading(false);
  }, []);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <Preloader loadingImage={loadingImage} loading={loading} />
              }
            >
              <HomePage
                isHeader={isHeader}
                setHeader={setHeader}
                about={about}
                setLoadingImage={setLoadingImage}
                specialists={specialists}
                faq={faq}
              />
            </Suspense>
          }
        ></Route>
        <Route path="/comment" element={<CommentPage />}></Route>
        <Route path="/doctors" element={<DoctorsPage />}></Route>
        <Route path="/price" element={<PricePage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/services/spine" element={<SpinePage />}></Route>
        <Route path="/services/massage" element={<MassagePage />}></Route>
        <Route path="/services/joint" element={<JointPage />}></Route>
        <Route
          path="/services/physiotherapy"
          element={<PhysiotherapyPage />}
        ></Route>
        <Route path="/services/stocks" element={<StocksPage />}></Route>
        <Route path="/services/botulinum" element={<BotulinumPage />}></Route>
        <Route
          path="/services/rehabilitation"
          element={<RehabilitationPage />}
        ></Route>
        <Route
          path="/services/therapeutic"
          element={<TherapeuticPage />}
        ></Route>
        <Route path="/consultation" element={<ConsultationPage />}></Route>
        <Route path="/doctor/:id" element={<DoctorPage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogMore />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
