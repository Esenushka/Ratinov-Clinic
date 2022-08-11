import { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import Stocks from "../components/Stonks/Stocks";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default function StocksPage() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("stock")
      .get()
      .then((snapshot) => {
        const stocksArr = [];
        snapshot.forEach((doc) => {
          stocksArr.push({ ...doc.data(), id: doc.id });
        });
        setStocks(stocksArr);
        setLoading(false)
      });
  }, []);
  if (loading) {
    return <Preloader />
  }
  return (
    <div>
      <Header />
      <TopBlock path={"Услугии"} secondPath={"Акции"} bold={"Акции"} />
      <Stocks stocks={stocks} />
      <CallMe />
      <Footer />
    </div>
  )
}
