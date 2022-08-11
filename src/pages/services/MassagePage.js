import { useEffect, useState } from "react";
import Consultaition from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Massage from "../../components/Massage/Massage";
import Preloader from "../../components/Preloader/Preloader";
import TopBlock from "../../components/TopBlock/TopBlock";
import { db } from "../../config/firebase";

export default function MassagePage() {
  const [massage, setMassage] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("massage")
      .get()
      .then((snapshot) => {
        const massageArr = [];
        snapshot.forEach((doc) => {
          massageArr.push({ ...doc.data(), id: doc.id })
        })
        setMassage(massageArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <Preloader />
  }
  return (
    <div>
      <Header />
      <TopBlock bold="Массаж" path={"Услуги"} secondPath={"Массаж"} />
      <Massage massage={massage}/>
      <Consultaition />
      <Footer />
    </div>
  )
}
