import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Physiotherapy from "../../components/Physiotherapy/Physiotherapy";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function PhysiotherapyPage() {
  return (
    <div>
      <Header />
      <TopBlock bold={"Физиолечение"} path={"Услуги"} secondPath={"Физиолечение"} />
      <Physiotherapy />
      <CallMe />
      <Footer />
    </div>
  )
}
