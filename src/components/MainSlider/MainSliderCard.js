import { memo } from "react"
import scss from "./MainSlider.module.scss"
export default memo(function MainSliderCard() {
  return (
    <div className={scss.card}>
      <div className={scss.right}>
        <span className={scss.camera}>
          <iframe
            width="560"
            height="250"
            src="https://www.youtube.com/embed/TSaxBAf_FZY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </span>
      </div>
    </div>
  )
})
