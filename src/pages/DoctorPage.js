import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CallMe from "../components/CallMe/CallMe";
import Doctor from "../components/Doctor/Doctor";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import TopBlock from "../components/TopBlock/TopBlock";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import { db } from "../config/firebase";

export default function DoctorPage() {
  const [doctor, setDoctor] = useState({ diplomas: [] });
  const params = useParams();
  console.log(params.id);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.id === params.id ? setDoctor(doc.data()) : doc.data()
        })
        setLoading(false)
      })
  }, [params])

  return (
    <>
      <Preloader loading={loading} loadingImage={false} />
      <Header />
      <TopBlock path="Специалисты клиники" secondPath={doctor.name} bold={doctor.name} />
      <Doctor  {...doctor} />
      <YouTubeSlider />
      <CallMe />
      <Footer />
    </>
  )
}
