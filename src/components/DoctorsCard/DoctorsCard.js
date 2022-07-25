import scss from "./Doctors.module.scss";
import { Link } from "react-router-dom";

export default function DoctorsCard({ img, name, proffesions, id }) {
  return (
    <div className={scss.card}>
      {img ? <img src={img} alt="Фото врача" /> : <span></span>}
      <div className={scss.wrap_card}>
        <div className={scss.name}>
          <Link to={`/doctors/${id}`}>{name}</Link>
          <p>{proffesions}</p>
        </div>  
        <div className={scss.btn}>
          <Link to={`/doctors/${id}`}>
            <button className="btn-small btn">Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
