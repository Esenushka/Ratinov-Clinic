import scss from "./YouTubeSlider.module.scss"

export default function YouTubeSliderCard() {
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        <img src="/images/camera.svg" />
      </span>
      <p>
        Как вылечить грыжу позвоночника без операции?
      </p>
    </div>
  )
}
