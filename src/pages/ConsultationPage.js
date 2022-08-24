import React, { memo, useEffect, useState } from 'react'
import CommentBlock from '../components/CommentBlock/CommentBlock'
import ConsultationBlockPage from '../components/ConsulationPage/ConsultationBLockPage'
import DoctorSlider from '../components/DoctorSlider/DoctorSlider'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Preloader from '../components/Preloader/Preloader'
import TopBlock from '../components/TopBlock/TopBlock'

export default memo(function ConsultationPage() {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    setTimeout(() =>
      setLoading(false)
      , 1500)
  }, [])
  return (
    <>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header />
      <TopBlock bold={"Онлайн консультация"} path={"Онлайн консультация "} />
      <ConsultationBlockPage setLoadingImage={setLoadingImage} />
      <DoctorSlider fullSize/>
      <CommentBlock />
      <Footer />
    </>
  )
})
