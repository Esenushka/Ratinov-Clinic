import React from "react";
import YouTubeSlider from "../YouTubeSlider/YouTubeSlider";
import scss from "./Joint.module.scss";

export default function Joint({ treatmentList, treatmentList2, therapiesList, therapiesList2, setLoadingImage }) {
  return (
    <div className={scss.wrapper_bg}>
      <div className={`container ${scss.wrapper}`}>
        <div className={scss.bg}>
          <img onLoad={() => setLoadingImage(false)} src="/images/joint-left-bg.png" alt="Задний блок" />
        </div>
        <h1>
          Как проходит <span>лечение суставов</span>
        </h1>
        <div className="page-blocks_wrapper">
          <div className="page-block">
            <h4>Диагностика</h4>
            <p>
              Осмотр <span>врача-невролога</span>
              +МРТ исследование, которое позволяет максимально точно определить
              причину боли в спине
            </p>
          </div>
          <div className="page-block">
            <h4>Диагноз и назначение</h4>
            <p>
              <span>Невролог- вертебролог</span>
              оценивает ваши снимки, ставит диагноз и назначает то лечение,
              которое подходит именно ВАМ, с учетом индивидуальных особенностей
              болезни
            </p>
          </div>
          <div className="page-block">
            <h4>Лечение</h4>
            <p>
              Мы воздействуем локально, влияя на воспаление, тем самым повышая
              обмен веществ в больной области при помощи комплексной и
              современной физиотерапии
            </p>
          </div>
        </div>
        {therapiesList.map((type) => (
          <div className={scss.therapies_types} key={type.id}>
            <h4 className={scss.therapy_type}>{type.therapy}</h4>
            <hr />
            <p>{type.desc}</p>
          </div>
        ))}
        <div className={`container ${scss.methods_right_block}`}>
          {therapiesList2.map((type) => (
            <div className={scss.therapies_types} key={type.id}>
              <h4 className={scss.therapy_type}>{type.therapy}</h4>
              <hr />
              <p>{type.desc}</p>
            </div>
          ))}
          <button className="btn btn-big-bg">
            Записаться к ортопеду - травматологу
          </button>
        </div>
        <div className={scss.bg_left}>
          <img src="/images/joint-bg.png" alt="Задний блок" />
        </div>
      </div>
      <div className={scss.what_we_treat}>
        <div className={scss.treat_center}>
          <h1>
            <span>Какие симптомы</span> мы лечим
          </h1>
          <div className={scss.treatment_wrapper}>
            {treatmentList.map((item) => (
              <div className={scss.treatment_left} key={item.id}>
                <h4>{item.pain}</h4>
                <ul>
                  {item.painCause.map((cause) => (
                    <li key={cause}>{cause}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={scss.treatment_right}>
              {treatmentList2.map((item) => (
                <div className={scss.treatment_right_block} key={item.id}>
                  <h4>{item.pain}</h4>
                  <ul>
                    {item.painCause.map((cause) => (
                      <li key={cause}>{cause}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${scss.about_health}`}>
        <YouTubeSlider />
      </div>
    </div>
  );
}
