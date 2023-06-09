import scss from "./YouTubeSlider.module.scss";
import { memo } from "react";

export default memo(function YouTubeSliderCard({ width, ...props }) {
  return (
    <div className={scss.card}>
      <span className={scss.camera}>
        {props.img ? (
          <iframe
            src={props.img}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src="/images/camera.svg" alt={props.name} />
        )}
      </span>
      <a
        style={{ fontSize: `${width ? "small" : ""}` }}
        rel="noreferrer"
        target={"_blank"}
        href={props.video}
      >
        {props.name}
      </a>
    </div>
  );
});
