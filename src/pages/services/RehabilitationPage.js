import { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import Rehabilitation from "../../components/Rehabilitation/Rehabilitation";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function RehabilitationPage() {
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
      <TopBlock bold={"Реабилитация"} text={"После COVID-19"} path="Услуги" secondPath={"Реабилитация после COVID-19"} />
      <Rehabilitation />
      <CallMe />
      <Footer />
    </div>
  )
}
