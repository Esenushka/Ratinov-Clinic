import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import scss from "./ServiceBlock.module.scss";

export default memo(function ServiceBlock({setLaodingImage, img, title, path }) {
  return (
    <div className={scss.card}>
      <img onLoad={()=> setLaodingImage(false)} src={img} alt="Услуги" />
      <div className={scss.text}>
        <span>{title}</span>
        <LinkTop to={"/services/" + path}>
          Подробнее
        </LinkTop>
      </div>
    </div>
  )
})
