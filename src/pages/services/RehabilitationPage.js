import React, { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import Rehabilitation from "../../components/Rehabilitation/Rehabilitation";
import TopBlock from "../../components/TopBlock/TopBlock";

export default React.memo(function RehabilitationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [isHeader, setHeader] = useState(true);

  return (
    <div>
      <Preloader loading={loading} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      {isHeader && (
        <>
          <TopBlock bold={"Услуги / Реабилитация после COVID-19"} />
          <Rehabilitation />
          <CallMe />
          <Footer />
        </>
      )}
    </div>
  );
});
