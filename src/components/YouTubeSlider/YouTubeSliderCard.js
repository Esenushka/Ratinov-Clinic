import scss from "./YouTubeSlider.module.scss"
import { memo } from "react"

export default memo(function YouTubeSliderCard({ ...el }) {
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        <img src="/images/camera.svg" alt={el.name} />
      </span>
      <a href={el.video}>
        {el.name}
      </a>
    </div>
  )
})
