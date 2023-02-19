import scss from "./Doctors.module.scss";
import { useLocation } from "react-router-dom";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

export default memo(function DoctorsCard({
  fullSize,
  setLoadingImage,
  day_work,
  price,
  fullSizeImg,
  img,
  name,
  proffesions,
  id,
}) {
  const location = useLocation();

  return (
    <div className={scss.card + " " + (fullSize ? scss.main : "")}>
      {fullSize ? (
        <img src={fullSizeImg} alt="Фото врача" />
      ) : img ? (
        <img onLoad={() => setLoadingImage(false)} src={img} alt="Фото врача" />
      ) : (
        <span></span>
      )}
      <div className={scss.wrap_card}>
        <div className={scss.name}>
          <LinkTop to={`/doctor/${id}`}>{name}</LinkTop>
          <p>{proffesions}</p>
        </div>
        {location.pathname === "/" ? (
          <>
            <div className={scss.other}>
              <p>{day_work}</p>
              <div className={scss.other_text}>
                <h5>
                  Стоимость приёма <br />{" "}
                  {price > 0 ? price + " сомов" : "Бесплатно"}
                </h5>
                <LinkTop to={`/doctor/${id}`}>
                  <button className={`btn-small btn`}>Подробнее</button>
                </LinkTop>
              </div>
            </div>
          </>
        ) : (
          <div className={scss.btn}>
            <LinkTop to={`/doctor/${id}`}>
              <button className="btn-small btn">
                Подробнее
              </button>
            </LinkTop>
          </div>
        )}
      </div>
    </div>
  );
});
