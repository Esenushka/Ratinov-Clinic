import { useState } from "react";
import scss from "./Doctor.module.scss";

export default function DoctorCard({ title, des }) {
  const [active, setActive] = useState(false);
  return (
    <div className={scss.block}>
      <span onClick={() => setActive(!active)}>
        <img
          className={active ? scss.active : ""}
          src="/images/slider-arrow.svg"
          alt="Стрелка"
        />
        <p>{title}</p>
      </span>
      <div className={scss.info + " " + (active ? scss.active : "")}>
        <ul>
          {des.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
