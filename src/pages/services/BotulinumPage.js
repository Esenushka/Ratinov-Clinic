import { useEffect, useState } from 'react'
import Botulinum from '../../components/Botulinum/Botulinum'
import CallMe from '../../components/CallMe/CallMe'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Preloader from '../../components/Preloader/Preloader'
import TopBlock from '../../components/TopBlock/TopBlock'

export default function BotulinumPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, []);
  if (loading) {
    return <Preloader />
  }
  return (
    <div>
      <Header />
      <TopBlock bold={"Ботулинотерапия"} path={"Услуги"} secondPath={"Ботулинотерапия"} />
      <Botulinum />
      <CallMe />
      <Footer />
    </div>
  )
}
