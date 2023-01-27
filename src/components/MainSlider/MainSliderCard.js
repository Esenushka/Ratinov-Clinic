import { memo } from "react";
import scss from "./MainSlider.module.scss";
export default memo(function MainSliderCard({ src }) {
  return (
    <div className={scss.card}>
      <iframe
        width="490"
        height="250"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          borderRadius: "32px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></iframe>
    </div>
  );
});
