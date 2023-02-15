import React, { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Joint from "../../components/Joint/Joint";
import Preloader from "../../components/Preloader/Preloader";
import TopBlock from "../../components/TopBlock/TopBlock";
import { db } from "../../config/firebase";

export default function JointPage() {
  const [loadingImage, setLoadingImage] = useState(true);
  const [therapiesList, setTherapiesList] = useState([]);
  const [therapiesList2, setTherapiesList2] = useState([]);
  const [treatmentList, setTreatmentList] = useState([]);
  const [treatmentList2, setTreatmentList2] = useState([]);
  useEffect(() => {
    db.collection("therapiesList")
      .get()
      .then((snapshot) => {
        const therapiesArr = [];
        snapshot.forEach((doc) => {
          therapiesArr.push({ ...doc.data(), id: doc.id });
        });
        setTherapiesList(
          therapiesArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
      });
    db.collection("therapiesList2")
      .get()
      .then((snapshot) => {
        const therapiesArr = [];
        snapshot.forEach((doc) => {
          therapiesArr.push({ ...doc.data(), id: doc.id });
        });
        setTherapiesList2(
          therapiesArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
      });
    db.collection("treatmentList")
      .get()
      .then((snapshot) => {
        const treatmentArr = [];
        snapshot.forEach((doc) => {
          treatmentArr.push({ ...doc.data(), id: doc.id });
        });
        setTreatmentList(
          treatmentArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
      });
    db.collection("treatmentList2")
      .get()
      .then((snapshot) => {
        const treatmentArr = [];
        snapshot.forEach((doc) => {
          treatmentArr.push({ ...doc.data(), id: doc.id });
        });
        setTreatmentList2(
          treatmentArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
        setLoadingImage(false);
      });
  }, []);
  const [isHeader, setHeader] = useState(true);

  return (
    <>
      <Preloader loadingImage={loadingImage} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      {isHeader && (
        <>
          {" "}
          <TopBlock bold={"Услуги / Лечение суставов"} text={""} />
          <Joint
            therapiesList={therapiesList}
            therapiesList2={therapiesList2}
            treatmentList={treatmentList}
            treatmentList2={treatmentList2}
          />
          <CallMe />
          <Footer />
        </>
      )}
    </>
  );
}
