import scss from "./YouTubeSlider.module.scss"
import { Link } from "react-router-dom"

export default function YouTubeSliderCard({ text }) {
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        <img src="/images/camera.svg" alt={text} />
      </span>
      <Link to="/">
        {text}
      </Link>
    </div>
  )
}
