import scss from "../components/Result/Result.module.scss"
import CallMe from "../components/CallMe/CallMe"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import TopBlock from "../components/TopBlock/TopBlock"
import { db } from "../config/firebase"
import { useEffect, useState } from "react"
import ResultCard from "../components/Result/ResultCard"

export default function ResultPage() {
  const [result, setResult] = useState([])
  const [filtered, setFiltered] = useState([result])

  function resultFilter(type) {
    if (type === 'all') {
      setFiltered(result)
    } else {
      const newResult = [...result].filter(e => e.type === type)
      setFiltered(newResult)
    }
  }

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
      <div className={`container ${scss.result__wrapper}`} >
        <div className={scss.title}>
          <p>Это результаты лечения наших пациентов.</p>
          <span>Вдохновляют и дарят надежду!</span>
        </div>
        <div className={scss.btn__group}>
          <button className="btn btn-small" onClick={() => resultFilter('all')}>Все</button>
          <button className="btn btn-small" onClick={() => resultFilter('neck')}>Шейный отдел</button>
          <button className="btn btn-small" onClick={() => resultFilter('lumbar')}>Поясничный отдел</button>
        </div>
        <div className={scss.result}>
          {
            filtered.map((e) => (
              <ResultCard key={e.id} {...e} />
            ))
          }

        </div>
      </div>
      <CallMe />
      <Footer />
    </div>
  )
}