import scss from "../components/Result/Result.module.scss"
import CallMe from "../components/CallMe/CallMe"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import TopBlock from "../components/TopBlock/TopBlock"
import { db } from "../config/firebase"
import { useEffect, useState } from "react"
import ResultCard from "../components/Result/ResultCard"
import { useLocation, useNavigate } from "react-router-dom"
import Preloader from "../components/Preloader/Preloader"

export default function ResultPage() {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const paramEntries = new URLSearchParams(location.search).entries()
  const fromEntries = Object.fromEntries(paramEntries)
  const paramArr = Object.keys(fromEntries);
  const handleChange = (type) => {
    type === "all" ? navigate("/result") :
      navigate(location.pathname + "?" + type)
  }

  useEffect(() => {
    db.collection("result")
      .get()
      .then((snapshot) => {
        const resultArr = []
        snapshot.forEach((e) => {
          resultArr.push({ ...e.data(), id: e.id });
        })
        setResult(resultArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)));
        setLoading(false)
      })
  }, []);
  return (
    <>
      <Preloader loading={loading} loadingImage={loadingImage}/>
      <Header />
      <TopBlock path={'Результаты'} bold={'Результаты'} />
      <div className={`container ${scss.result__wrapper}`} >
        <div className={scss.title}>
          <p>Это результаты лечения наших пациентов.</p>
          <span>Вдохновляют и дарят надежду!</span>
        </div>
        <div className={scss.btn__group}>
          <button
            className={"btn btn-small " + (paramArr.length === 0 ? scss.btnActive : "")}
            onClick={() => handleChange('all')}>
            Все
          </button>
          <button
            className={"btn btn-small " + (paramArr.some((param) => param === "neck") ? scss.btnActive : "")}
            onClick={() => handleChange('neck')}>
            Шейный отдел
          </button>
          <button
            className={"btn btn-small " + (paramArr.some((param) => param === "lumbar") ? scss.btnActive : "")}
            onClick={() => handleChange('lumbar')}>
            Поясничный отдел
          </button>
        </div>
        <div className={scss.result}>
          {
            result.map((e) => (
              paramArr.length === 0 ?
                <ResultCard setLoadingImage={setLoadingImage}  key={e.id} {...e} /> :
                paramArr.map((param) =>
                  e.type === param ?
                    <ResultCard setLoadingImage={setLoadingImage} key={e.id} {...e} /> : "")
            ))
          }
        </div>
      </div>
      <CallMe />
      <Footer />
    </>
  )
}