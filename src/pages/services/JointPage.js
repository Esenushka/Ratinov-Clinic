import React from "react";
import Consultaition from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Joint from "../../components/Joint/Joint";
import TopBlock from "../../components/TopBlock/TopBlock";

export default function JointPage() {
  return (
    <>
      <Header />
      <TopBlock
        bold={"Суставов"}
        text={"Лечение"}
        reverse
        path={"Услуги"}
        secondPath={"Лечение суставов"}
      />
      <Joint />
      <Consultaition />
      <Footer />
    </>
  );
}
