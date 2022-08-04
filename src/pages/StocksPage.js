import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Stocks from "../components/Stonks/Stocks";
import TopBlock from "../components/TopBlock/TopBlock";

export default function StocksPage() {
  return (
    <div>
      <Header />
      <TopBlock path={"Услугии"} secondPath={"Акции"} bold={"Акции"} />
      <Stocks />
      <CallMe />
      <Footer />
    </div>
  )
}
