import { useState } from "react"

export default function Select({ doctors }) {
  const [active, setActive] = useState(false)

  return (
    <div className="select_wrapper">
      <span onClick={() => setActive(!active)} className="select">
        <p>Специализация</p>
        <img className={active ? "active" : ""} src="/images/arrow.svg" alt="Стрелка" />
      </span>
      <div className={`checkboxs ${active ? "active" : ""}`}>
        {doctors.map((el) =>
          <span key={el.id} className="checkbox">
            <input type="checkbox" />
            <p>{el.name}</p>
          </span>
        )}
        <span className="checkbox">
          <input checked type="checkbox" />
          <p>Все</p>
        </span>
      </div>
    </div>)
}
