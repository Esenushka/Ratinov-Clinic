import React, { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import Therapeutic from "../../components/Therapeutic/Therapeutic";
import TopBlock from "../../components/TopBlock/TopBlock";

export default React.memo(function TherapeuticPage() {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [isHeader, setHeader] = useState(true);

  return (
    <div>
      <Preloader loading={loading} loadingImage={loadingImage} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      {isHeader && (
        <>
          {" "}
          <TopBlock
            bold={"Услуги / Курс лечебной физкультуры"}
            text={""}
            reverse
            path={""}
          />
          <Therapeutic setLoadingImage={setLoadingImage} />
          <CallMe />
          <Footer />
        </>
      )}
    </div>
  );
});
