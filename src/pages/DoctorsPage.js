import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import Select from "../components/Select/Select";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";
import CardDoctor from "../components/DoctorCardForPage/CardDoctor";

export default React.memo(function DoctorsPage() {
  const [doctors, setDoctors] = useState([].reverse());
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const location = useLocation();
  const paramEntries = new URLSearchParams(location.search).entries();
  const fromEntries = Object.fromEntries(paramEntries);
  const paramArr = Object.keys(fromEntries);
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = [];
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        });
        setDoctors(
          doctorsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header />
      <TopBlock
        text={"клиники"}
        bold={"Специалисты"}
        path={""}
      />
      <div className="container doctors-page_wrapper">
        <Select />
        <div className="doctors_wrapper">
          {doctors.map((doctor) =>
            paramArr.length === 0 ? (
              <CardDoctor
                fullSize={false}
                setLoadingImage={setLoadingImage}
                key={doctor.id}
                {...doctor}
              />
            ) : paramArr.some((param) => doctor.post.includes(param)) ? (
              <CardDoctor
                fullSize={false}
                setLoadingImage={setLoadingImage}
                key={doctor.id}
                {...doctor}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <CallMe />
      <Footer />
    </div>
  );
});
