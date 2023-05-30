import { memo, useState } from "react";
import LinkTop from "../../hooks/LinkTop";
import scss from "./Spine.module.scss";

export default memo(function Spine({ infoList }) {
  const [isActive, setActive] = useState(true);
  const [isActive2, setActive2] = useState(true);

  return (
    <div className={scss.wrapper_bg}>
      <div className={scss.bg}></div>
      <div className={scss.wrapper}>
        <div className="container ">
          <h1 className={scss.title}>Как проходит лечение грыж без операции</h1>
          <div className="page-blocks_wrapper">
            <div className="page-block">
              <h4>Диагностика</h4>
              <p>
                Осмотр врача-невролога +МРТ исследование, которое позволяет
                максимально точно определить причину боли в спине.
              </p>
            </div>
            <div className="page-block">
              <h4>Диагноз и назначение</h4>
              <p>
                Специалисты оценивают ваши снимки, ставят диагноз и назначают
                индивидуальное лечение.
              </p>
            </div>
            <div className="page-block">
              <h4>Лечение</h4>
              <p>
                Мы повышаем обмен веществ в больной области при помощи
                комплексной и современной физиотерапии.
              </p>
            </div>
          </div>
        </div>
        <div className={scss.shadowLine}></div>
        <div className={scss.des}>
          <div className="container">
            <h1 onClick={() => setActive(!isActive)}>
              В лечение грыжи позвоночника входит *
            </h1>
            {isActive ? (
              <ul>
                {infoList.map((info) => (
                  <li key={info.id}>{info.title}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className={isActive ? scss.line : ""}></div>
          <div className={scss.procedure}>
            <div className="container">
              <h1 onClick={() => setActive2(!isActive2)}>
                Возможные дополнительные процедуры
              </h1>
              {isActive2 ? (
                <p>
                  Ударно-волновая терапия и массаж, которые могут назначаться
                  лечащими врачом после осмотра, анамнеза заболевания, доп.
                  анализов (МРТ, анализ крови). <br /> Больше информации вы
                  сможете получить на очном приеме у врача. <br /> После лечения
                  пациенту назначается курс реабилитации в виде лечебной
                  физкультуры
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={isActive ? scss.line : ""}></div>
          <div className="container">
            <a
              className={scss.btnn}
              href="https://api.whatsapp.com/send/?phone=996555142020&text&type=phone_number&app_absent=0"
            >
              Записаться к неврологу
            </a>
          </div>
          <div className={scss.shadowLine}></div>
        </div>
        <div className={"container " + scss.info_blocks_wrapper}>
          {isActive ? (
            <h1 style={{ marginLeft: "24px", fontSize: "20px" }}>Процедуры</h1>
          ) : (
            <h1>Терапия</h1>
          )}
          <div className={scss.block_wrapper}>
            {infoList.map((info) =>
              info.duration ? (
                <div key={info.id} className={scss.info_block}>
                  <div className={scss.title}>
                    <h5>{info.title}</h5>
                    <b>{info.extraTitle}</b>
                  </div>
                  <div className={scss.bottom_info}>
                    <p>Длительность процедуры: {info.duration} минут</p>
                    <p>
                      Курс лечения: {info.from ? "от " + info.from : ""} до{" "}
                      {info.to} процедур
                    </p>
                  </div>
                  <LinkTop to={info.path}>Подробнее</LinkTop>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
