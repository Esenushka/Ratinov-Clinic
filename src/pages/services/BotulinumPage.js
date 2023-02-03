import React, { useEffect, useState } from 'react'
import Botulinum from '../../components/Botulinum/Botulinum'
import CallMe from '../../components/CallMe/CallMe'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Preloader from '../../components/Preloader/Preloader'
import TopBlock from '../../components/TopBlock/TopBlock'

export default React.memo(function BotulinumPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  return (
    <div>
      <Preloader loading={loading}/>
      <Header />
      <TopBlock bold={"Услуги / Ботулинотерапия"} />
      <Botulinum  />
      <CallMe />
      <Footer />
    </div>
  )
})
