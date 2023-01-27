import { memo } from "react";
import css from "./Consultation.module.scss";

export default memo(function About({ about, setLoadingImage }) {
  return (
    <div id={"about"} className={`${css.about} container`}>
      <h1>О НАШЕЙ КЛИНИКЕ</h1>
      <div className={css.about_card}>
        {about.map((info) => (
          <div className={css.card} key={info.id}>
            <img
              onLoad={() => setLoadingImage(false)}
              src={info.img}
              alt={"Картинка о клиники"}
            />
              <h1>{info.bold}</h1>
              <div className={css.line}></div>
              {info.text}
          </div>
        ))}
      </div>
    </div>
  );
});
