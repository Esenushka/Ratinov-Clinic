import { Link } from "react-router-dom";
import scss from "./ServiceBlock.module.scss";

export default function ServiceBlock({ img, text, path }) {
  return (
    <div className={scss.card}>
      <img src={img} alt="Услуги" />
      <div className={scss.text}>
        <span>{text}</span>
        <Link to={"/services/" + path}>
          <button className="btn btn-small">Подробнее</button>
        </Link>
      </div>
    </div>
  )
}
