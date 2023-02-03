import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import scss from "./Spine.module.scss";

export default memo(function Spine({ infoList }) {
  return (
    <div className={scss.wrapper_bg}>
      <div className={scss.bg}></div>
      <div className={scss.wrapper}>
        <div className="container ">
          <h1>Как проходит лечение грыж без операции</h1>
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
                Специалисты оценивают ваши снимки, ставит диагноз и назначает
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
            <b>В лечение грыжи позвоночника входит *</b>
            <ul>
              {infoList.map((info) => (
                <li key={info.id}>
                  {info.title} {info.duration}
                </li>
              ))}
            </ul>
          </div>
          <div className={scss.line}></div>
          <div className={scss.procedure}>
            <div className="container">
              <h1>Возможные дополнительные процедуры</h1>
              <p>
                Ударно-волновая терапия и массаж, которые могут назначаться
                лечащими врачом после осмотра, анамнеза заболевания, доп.
                анализов (МРТ, анализ крови). <br /> Больше информации вы
                сможете получить на очном приеме у врача. <br /> После лечения
                пациенту назначается курс реабилитации в виде лечебной
                физкультуры
              </p>
            </div>
          </div>
          <div className={scss.line}></div>
          <div className="container">
            <div className={scss.btnn}>
              <LinkTop to={"/"}>Записаться к неврологу</LinkTop>
            </div>
          </div>
          <div className={scss.shadowLine}></div>
        </div>
        <div className={"container " + scss.info_blocks_wrapper}>
          <h1>Терапия</h1>
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
