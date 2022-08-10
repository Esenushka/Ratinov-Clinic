import { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Physiotherapy from "../../components/Physiotherapy/Physiotherapy";
import Preloader from "../../components/Preloader/Preloader";
import TopBlock from "../../components/TopBlock/TopBlock";
import { db } from "../../config/firebase";

export default function PhysiotherapyPage() {
  const [physiotherapy, setPhysiotherapy] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("physiotherapy")
      .get()
      .then((snapshot) => {
        const physiotherapyArr = []
        snapshot.forEach((doc) => {
          physiotherapyArr.push({ ...doc.data(), id: doc.id })
        })
        setPhysiotherapy(physiotherapyArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)));
        setLoading(false)
      });
  }, []);
  if (loading) {
    return <Preloader />
  }
  return (
    <div>
      <Header />
      <TopBlock bold={"Физиолечение"} path={"Услуги"} secondPath={"Физиолечение"} />
      <Physiotherapy physiotherapy={physiotherapy} />
      <CallMe />
      <Footer />
    </div>
  )
}
