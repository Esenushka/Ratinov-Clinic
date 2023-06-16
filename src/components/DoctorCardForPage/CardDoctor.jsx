import scss from "./card.module.scss";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

export default memo(function CardDoctor({
  setLoadingImage,
  img,
  name,
  proffesions,
  id,
}) {

  return (
    <div className={scss.card}>
      <img src={img} onLoad={() => setLoadingImage(false)} alt="Фото врача" />
      <div className={scss.wrapper}>
        <div>
          <h1>{name}</h1>
          <div className={scss.line}></div>
          <p>{proffesions}</p>
        </div>
        <LinkTop className={scss.btn} to={`/doctor/${id}`}>
          Подробнее
        </LinkTop>
      </div>
    </div>
  );
});
