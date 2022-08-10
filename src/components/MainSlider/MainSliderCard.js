import { Link } from "react-router-dom"
import scss from "./MainSlider.module.scss"
export default function MainSliderCard() {
  return (
    <div className={scss.card}>
      <div className={scss.left}>
        <h1>
          <span>Истории и отзывы </span>
          наших пациентов после лечения
        </h1>
        <p>Метод резорбции - уменьшение и заживление  грыжи,
          вплоть до полного ее исчезновения или рубцевания.</p>
        <span>Подробнее</span>
        <div className={scss.btns}>
          <Link to={"/comment"}>
            <button className="btn btn-big-bg">Отзывы</button>
          </Link>
          <button className="btn btn-watch">Смотреть видео</button>
        </div>
      </div>
      <div className={scss.right}>
        <span className={scss.camera}>
          <img src="/images/camera.svg" alt="Камера" />
        </span>
      </div>
    </div>
  )
}
