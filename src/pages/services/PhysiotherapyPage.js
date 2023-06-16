import React, { useEffect, useState } from "react";
import CallMe from "../../components/CallMe/CallMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Physiotherapy from "../../components/Physiotherapy/Physiotherapy";
import Preloader from "../../components/Preloader/Preloader";
import TopBlock from "../../components/TopBlock/TopBlock";
import { db } from "../../config/firebase";

export default React.memo(function PhysiotherapyPage() {
  const [physiotherapy, setPhysiotherapy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    db.collection("physiotherapy")
      .get()
      .then((snapshot) => {
        const physiotherapyArr = [];
        snapshot.forEach((doc) => {
          physiotherapyArr.push({ ...doc.data(), id: doc.id });
        });
        setPhysiotherapy(
          physiotherapyArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
        setLoading(false);
      });
  }, []);

  const [isHeader, setHeader] = useState(true);

  return (
    <div>
      <Preloader loadingImage={loadingImage} loading={loading} />
      <Header isHeader={isHeader} setHeader={setHeader} />

      {isHeader && (
        <>
          {" "}
          <TopBlock bold={"Услуги / Физиолечение"} />
          <Physiotherapy
            setLoadingImage={setLoadingImage}
            physiotherapy={physiotherapy}
          />
          <CallMe />
          <Footer />
        </>
      )}
    </div>
  );
});
