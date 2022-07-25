import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function Select({ doctors }) {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const paramEntries = new URLSearchParams(location.search).entries()
  const fromEntries = Object.fromEntries(paramEntries)
  const paramArr = Object.keys(fromEntries);
  const handleChange = (e, proffesion, type) => {
    type ? navigate("/doctors") : e.target.checked
      ? navigate(location.pathname + "?" + proffesion + "&" + (paramArr.map((param) => param + "&").join("")))
      : navigate(location.pathname + "?" + (paramArr.filter((param) => param !== proffesion).map((param) => param + "&").join("")))
      
    }
  return (
    <div className="select_wrapper">
      <span className={"select" + (active ? " active" : "")} onClick={() => setActive(!active)}>
        <p>Специализация</p>
        <img src="/images/arrow.svg" alt="Стрелка" />
      </span>
      <div className={`checkboxs ${active ? "active" : ""}`}>
        {doctors.map((el) =>
          <span key={el.id} className="checkbox">
            <input onChange={(e) => handleChange(e, el.proffesion)}
              checked={paramArr.find((param) => param === el.proffesion) || false}
              type="checkbox" />
            <p>{el.proffesion}</p>
          </span>
        )}
        <span className="checkbox">
          <input onChange={(e) => handleChange(e, null, true)} checked={paramArr.length === 0 ? true : false} type="checkbox" />
          <p>Все</p>
        </span>
      </div>
    </div>)
}
