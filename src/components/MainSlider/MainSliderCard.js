import { memo } from "react";
import scss from "./MainSlider.module.scss";
export default memo(function MainSliderCard({ src }) {
  return (
    <div className={scss.card}>
      <iframe
        width="590"
        height="289"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "7px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></iframe>
    </div>
  );
});
