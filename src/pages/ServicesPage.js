import React, { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import ServiceBlock from "../components/ServiceBlock/ServiceBlock";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default React.memo( function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    db.collection("services")
      .get()
      .then((snapshot) => {
        const servicesArr = [];
        snapshot.forEach((doc) => {
          servicesArr.push({ ...doc.data(), id: doc.id })
        });
        setServices(servicesArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false)
      });
  }, []);
  return (
    <>
      <Preloader loadingImage={loadingImage} loading={loading}/>
      <Header />
      <TopBlock bold={"Услуги / Все услуги"} path={""} />
      <div className="container services_wrapper">
        {
          services.map((info) => <ServiceBlock setLaodingImage={setLoadingImage} key={info.id} {...info} />)
        }
      </div>
      <CallMe />
      <Footer />
    </>
  )
})
