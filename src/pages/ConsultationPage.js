import React, { memo, useEffect, useState } from "react";
import CommentBlock from "../components/CommentBlock/CommentBlock";
import ConsultationBlockPage from "../components/ConsulationPage/ConsultationBLockPage";
import DoctorSlider from "../components/DoctorSlider/DoctorSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import TopBlock from "../components/TopBlock/TopBlock";
import CallMe from "../components/CallMe/CallMe";

export default memo(function ConsultationPage() {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  const [isHeader, setHeader] = useState(true);

  return (
    <>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      {isHeader && (
        <>
          <TopBlock bold={"Онлайн консультация"} />
          <ConsultationBlockPage setLoadingImage={setLoadingImage} />
          <DoctorSlider fullSize />
          <CommentBlock />
          <CallMe />
          <Footer />
        </>
      )}
    </>
  );
});
