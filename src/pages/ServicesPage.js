import { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import ServiceBlock from "../components/ServiceBlock/ServiceBlock";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("services")
      .get()
      .then((snapshot) => {
        const servicesArr = [];
        snapshot.forEach((doc) => {
          servicesArr.push({ ...doc.data(), id: doc.id })
        });
        setServices(servicesArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Preloader />
  }
  return (
    <>
      <Header />
      <TopBlock bold={"Услуги"} path={"Услуги"} />
      <div className="container services_wrapper">
        {
          services.map((info) => <ServiceBlock key={info.id} {...info} />)
        }
      </div>
      <CallMe />
      <Footer />
    </>
  )
}
