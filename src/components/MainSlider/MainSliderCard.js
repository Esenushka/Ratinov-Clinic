import { memo } from "react"
import scss from "./MainSlider.module.scss"
export default memo(function MainSliderCard() {
  return (
    <div className={scss.card}>
      <div className={scss.right}>
        <span className={scss.camera}>
          <img src="/images/camera.svg" alt="Камера" />
        </span>
      </div>
    </div>
  )
})
