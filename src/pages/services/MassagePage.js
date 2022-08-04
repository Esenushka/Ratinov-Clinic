import Consultaition from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Massage from "../../components/Massage/Massage";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function MassagePage() {
  return (
    <div>
      <Header />
      <TopBlock bold="Массаж" path={"Услуги"} secondPath={"Массаж"} />
      <Massage />
      <Consultaition />
      <Footer />
    </div>
  )
}
