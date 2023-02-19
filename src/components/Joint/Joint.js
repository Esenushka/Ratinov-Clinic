import React from "react";
import YouTubeSlider from "../YouTubeSlider/YouTubeSlider";
import scss from "./Joint.module.scss";
import LinkTop from "../../hooks/LinkTop";

export default function Joint({
  treatmentList,
  treatmentList2,
  therapiesList,
  therapiesList2,
}) {
  const [isActive, setActive] = React.useState(true);
  const [isActive2, setAvtive2] = React.useState(true);
  return (
    <div className={scss.wrapper_bg}>
      <div className={`container ${scss.wrapper}`}>
        <div className={scss.bg}></div>
        <h1>Этапы лечения суставов</h1>
        <div className={scss.wrapperItems}>
          <div className={scss.page_block}>
            <h5 onClick={() => setActive(!isActive)}>Диагностика</h5>
            {isActive && (
              <p>
                Во время приема врач ортопед-травматолог проводит опрос о
                симптоматической картины заболевания пациента, выполняет
                ортопедическое тестирование для установления причины
                дискомфорта. При необходимости, врач выполняет УЗИ суставов или
                же назначает дополнительные методы исследования (МРТ, КТ,
                рентген, анализы)
              </p>
            )}
          </div>
          <div className={scss.page_block}>
            <h5 onClick={() => setActive(!isActive)}>Диагноз и назначение</h5>
            {isActive && (
              <p>
                На основании полученной информации, в ходе осмотра пациента,
                врач устанавливает диагноз, определяет методы, объем, прогноз
                лечения, о чём информирует пациента.
              </p>
            )}
          </div>
          <div className={scss.page_block}>
            <h5 onClick={() => setActive(!isActive)}>Лечение</h5>
            {isActive && (
              <p>
                Назначается индивидуально с учётом всех индивидуальных
                особенностей заболевания пациента. В арсенале врача имеются
                следующие процедуры:
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={scss.shadowLine}></div>
      <div className="container">
        <h1>Лечение по методу резорбции</h1>
        {therapiesList.map((type) => (
          <div className={scss.therapies_types} key={type.id}>
            <h4
              onClick={() => setAvtive2(!isActive2)}
              className={scss.therapy_type}
            >
              {type.therapy}
            </h4>
            {isActive2 && (
              <ul>
                <li>{type.desc}</li>
              </ul>
            )}
          </div>
        ))}

        {therapiesList2.map((type) => (
          <div className={scss.therapies_types} key={type.id}>
            <h4
              onClick={() => setAvtive2(!isActive2)}
              className={scss.therapy_type}
            >
              {type.therapy}
            </h4>
            {isActive2 && (
              <ul>
                <li>{type.desc}</li>
              </ul>
            )}
          </div>
        ))}
        <LinkTop className={scss.linkk} to={"/consultation"}>
          Записаться к ортопеду - травматологу
        </LinkTop>
      </div>
      <div className={scss.what_we_treat}>
        <div className={scss.treat_center}>
          <h1 className="container" style={{ margin: "0 auto" }}>
            Какие Симптомы мы лечим
          </h1>
          <div className={"container " + scss.treatment_wrapper}>
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
