import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CallMe from "../components/CallMe/CallMe";
import DoctorsCard from "../components/DoctorsCard/DoctorsCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Select from "../components/Select/Select";
import TopBlock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([])
  const location = useLocation();
  const paramEntries = new URLSearchParams(location.search).entries()
  const fromEntries = Object.fromEntries(paramEntries)
  const paramArr = Object.keys(fromEntries);
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = []
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        })
        setDoctors(doctorsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, []);
  return (
    <div>
      <Header />
      <TopBlock path={"Специалисты клиники"} text={"клиники"} bold={"Специалисты"} />
      <div className="container doctors-page_wrapper">
        <Select/>
        <div className="doctors_wrapper">
          {
            doctors.map((doctor) =>
              paramArr.length === 0 ?
                <DoctorsCard key={doctor.id} {...doctor} /> :
                paramArr.some((param) =>
                  doctor.post.includes(param)) ?
                  <DoctorsCard key={doctor.id} {...doctor} /> : "")
          }
        </div>
      </div>
      <CallMe />
      <Footer />
    </div>
  )
}
