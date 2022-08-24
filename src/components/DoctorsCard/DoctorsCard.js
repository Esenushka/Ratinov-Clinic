import scss from "./Doctors.module.scss";
import { Link, useLocation } from "react-router-dom";
import { memo } from "react";

export default memo(function DoctorsCard({ fullSize, setLoadingImage, day_work, price, fullSizeImg, img, name, proffesions }) {
  const location = useLocation();
  return (
    <div className={scss.card + " " + (fullSize ? scss.main : "")}>
      {
        fullSize ? <img src={fullSizeImg} alt="Фото врача" /> :
          img ? <img onLoad={() => setLoadingImage(false)} src={img} alt="Фото врача" /> : <span></span>
      }
      <div className={scss.wrap_card}>
        <div className={scss.name}>
          <Link to={`/doctors/${name}`}>{name}</Link>
          <p>{proffesions}</p>
        </div>
        {
          location.pathname === "/" ? <div className={scss.other}>
            <div className={scss.other_text}>
              <p>{day_work}</p>
              <h5>Стоимость приёма <br /> {price} сомов</h5>
            </div>
            <Link to={`/doctors/${name}`}><button className={`btn-small btn`}>Подробнее</button></Link>
          </div> :
            <div className={scss.btn}>
              <Link to={`/doctors/${name}`}>
                <button className="btn-small btn">Подробнее</button>
              </Link>
            </div>
        }
      </div>
    </div>
  )
})
