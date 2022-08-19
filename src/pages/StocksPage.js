import React, { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import Stocks from "../components/Stonks/Stocks";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default React.memo( function StocksPage() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
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
  return (
    <div>
      <Preloader loadingImage={loadingImage} loading={loading}/>
      <Header />
      <TopBlock path={"Услугии"} secondPath={"Акции"} bold={"Акции"} />
      <Stocks setLoadingImage={setLoadingImage} stocks={stocks} />
      <CallMe />
      <Footer />
    </div>
  )
})
