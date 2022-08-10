import css from "../components/Result/Result.module.scss"
import CallMe from "../components/CallMe/CallMe"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import TopBlock from "../components/TopBlock/TopBlock"
import { db } from "../config/firebase"
import { useEffect, useState } from "react"
import ResultCard from "../components/Result/ResultCard"

export default function ResultPage() {
  const [result, setResult] = useState([])
  useEffect(() => {
    db.collection("result")
      .get()
      .then((snapshot) => {
        const resultArr = []
        snapshot.forEach((e) => {
          resultArr.push({ ...e.data(), id: e.id });
        })
        setResult(resultArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, []);
  return (
    <div>
      <Header />
      <TopBlock path={'Результаты'} bold={'Результаты'} />
      <div className={`container ${css.result__wrapper}`} >
        {
          result.map((e) => (
            <ResultCard  key={e.id} {...e} />
          ))
        }
      </div>
      <CallMe />
      <Footer />
    </div>
  )
}