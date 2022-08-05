import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Rehabilitation from "../../components/Rehabilitation/Rehabilitation";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function RehabilitationPage() {
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
