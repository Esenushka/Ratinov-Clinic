import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallMe from "../components/CallMe/CallMe";
import Doctor from "../components/Doctor/Doctor";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default memo(function DoctorPage() {
  const [doctor, setDoctor] = useState({ diplomas: [] });
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.id === params.id ? setDoctor(doc.data()) : doc.data();
        });
        setLoading(false);
      });
  }, [params]);
  const [isHeader, setHeader] = useState(true);

  return (
    <>
      <Preloader loading={loading} loadingImage={false} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      {isHeader && (
        <>
          <TopBlock
            path=""
            secondPath=""
            bold={`Специалисты клиники / ${doctor.name}`}
          />
          <Doctor {...doctor} />
          <CallMe />
          <Footer />
        </>
      )}
    </>
  );
});
