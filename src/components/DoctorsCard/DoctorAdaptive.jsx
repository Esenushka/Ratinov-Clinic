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
  return (
    <div className={scss.adCard}>
      <img src={fullSizeImg} alt={name} />
      <div className={scss.price}>
        <p>Стоимость приема {price !== 0 ? price + " coм" : "бесплатно"}</p>
      </div>
      <div className={scss.bottomSide}>
        <h1>{name}</h1>
        <p>{proffesions}</p>
        <div className={scss.line}></div>
        <h5>{day_work}</h5>
        <div className={scss.line}></div>
        <LinkTop to={`/doctor/${id}`}>Подробнее</LinkTop>
      </div>
    </div>
  );
});
