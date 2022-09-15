import scss from "./YouTubeSlider.module.scss"
import { memo } from "react"

export default memo(function YouTubeSliderCard({ ...el }) {
  console.log(el.img);
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        {
          el.img
            ?
            <iframe
              width="290"
              height="190"
              src={el.img}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            : <img src="/images/camera.svg" alt={el.name} />
        }
      </span>
      <a href={el.video}>
        {el.name}
      </a>
    </div>
  )
})
