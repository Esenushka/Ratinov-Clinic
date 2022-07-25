import scss from "./Doctors.module.scss";
import { Link } from "react-router-dom";

export default function DoctorsCard({ img, name, proffesions }) {
  return (
    <div className={scss.card}>
      <img src={img} alt="Фото врача" />
      <div className={scss.wrap_card}>
        <div className={scss.name}>
          <Link to={`#`}>{name}</Link>
          <p>{proffesions}</p>
        </div>
        <div className={scss.btn}>
          <Link to={`#`}>
            <button className="btn-small btn">Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
