import React, { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import PriceCard from "../components/Price/PriceCard";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default React.memo(function Price() {
  const [price, setComments] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("price")
      .get()
      .then((snapshot) => {
        const priceArr = []
        snapshot.forEach((doc) => {
          priceArr.push({ ...doc.data(), id: doc.id });
        })
        setComments(priceArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false)
      })
  }, []);
  return (
    <div>
      <Preloader loadingImage={false} loading={loading}/>
      <Header />
      <TopBlock bold={"Цены"} path={"Цены"} />
      {
        price.map((e) => (
          <PriceCard key={e.id} {...e} />
        ))
      }
      <CallMe />
      <Footer />
    </div>
  )
})