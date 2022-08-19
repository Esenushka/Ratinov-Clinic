import React, { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import Rehabilitation from "../../components/Rehabilitation/Rehabilitation";
import TopBlock from "../../components/TopBlock/TopBlock";

export default React.memo(function RehabilitationPage() {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  return (
    <div>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header />
      <TopBlock bold={"Реабилитация"} text={"После COVID-19"} path="Услуги" secondPath={"Реабилитация после COVID-19"} />
      <Rehabilitation setLoadingImage={setLoadingImage} />
      <CallMe />
      <Footer />
    </div>
  )
})
