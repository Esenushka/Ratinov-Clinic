import scss from "./YouTubeSlider.module.scss"
import { Link } from "react-router-dom"
import { memo } from "react"

export default memo(function YouTubeSliderCard({ text }) {
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
})
