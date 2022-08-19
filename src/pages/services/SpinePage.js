import React, { useEffect, useState } from "react";
import Consultaition from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import ResultsSlider from "../../components/ResultsSlider/ResultsSlider";
import Spine from "../../components/Spine/Spine";
import TopBlock from "../../components/TopBlock/TopBlock";
import { db } from "../../config/firebase";

export default React.memo(function SpinePage() {
  const [infoList, setInfoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    db.collection("spine")
      .get()
      .then((snapshot) => {
        const infoArr = []
        snapshot.forEach((doc) => {
          infoArr.push({ ...doc.data(), id: doc.id })
        })
        setInfoList(infoArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false)
      })
  }, []);
  return (
    <>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header />
      <TopBlock bold={"Позвоночника"} text={"Лечение"} reverse path={"Услуги"} secondPath={"Лечение позвночника"} />
      <Spine setLoadingImage={setLoadingImage} infoList={infoList} />
      <ResultsSlider />
      <Consultaition />
      <Footer />
    </>
  )
})
