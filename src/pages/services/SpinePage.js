import Consultaition from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ResultsSlider from "../../components/ResultsSlider/ResultsSlider";
import Spine from "../../components/Spine/Spine";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function SpinePage() {
  return (
    <>
      <Header />
      <TopBlock bold={"Позвоночника"} text={"Лечение"} reverse path={"Услуги"} secondPath={"Лечение позвночника"} />
      <Spine />
      <ResultsSlider />
      <Consultaition />
      <Footer />
    </>
  )
}
