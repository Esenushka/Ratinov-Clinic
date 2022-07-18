import { useState } from "react"
import scss from "./FAQ.module.scss"

export default function FAQCard() {
  const [active, setActive] = useState(false);

  return (
    <div className={scss.block}>
      <span onClick={() => setActive(!active)}>
        <img src="/images/slider-arrow.svg" alt="Стрелка" />
        <p>Какие заболевания вы лечите?</p>
      </span>
      <div className={scss.info_wrapper + " " + (active ? scss.active : "")}>
        <div className={scss.info}>
          Запишитесь на очный прием к нашему неврологу-вертебрологу,  чтобы получить направление на МРТ со скидкой -500 сомов в ДЦ «Бонецкий»
        </div>
        <div className={scss.btns}>
          <button className="btn btn-small">Невролог - вертебролог </button>
          <button className="btn btn-small">Ортопед-травматолог </button>
          <button className="btn btn-small">Массажист </button>
        </div>
      </div>
    </div>
  )
}
