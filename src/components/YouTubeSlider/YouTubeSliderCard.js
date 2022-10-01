import scss from "./YouTubeSlider.module.scss"
import { memo } from "react"

export default memo(function YouTubeSliderCard({ ...props }) {
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        {
        props.img
            ?
            <iframe
              width="100%"
              height="220"
              src={props.img}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            : <img src="/images/camera.svg" alt={props.name} />
        }
      </span>
      <a rel="noreferrer" target={"_blank"} href={props.video}>
        {props.name}
      </a>
    </div>
  )
})
