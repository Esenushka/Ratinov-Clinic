import scss from "./CourseOfTreatmentBlock.module.scss";
import ProcedureBlock from "./ProcedureBlock";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

export default memo(function CourseOfTreatmentBlock() {
  const resorbcee = [
    {
      id: 1,
      titles: [
        "Резорбция - процесс уменьшения грыжи, вплоть до полного ее исчезновения или рубцевания. Процесс осуществляется за счет врожденного иммунитета, но не всегда наступает самостоятельно и требует много времени.",
      ],
    },
    {
      id: 2,
      titles: [
        "В норме скорость естественной резорбции невысокая - около 12-15 месяцев",
        " Процедуры безопасны и не требуют постоянного нахождения в больнице, поэтому лечение проводится амбулаторно и занимает в день 25-50 минут.",
      ],
    },
    {
      id: 3,
      titles: [
        "Узнать о возможности лечения можно только на очной консультации у врача.",
      ],
    },
    {
      id: 4,
      titles: [
        // "Стоимость лечения 36 400 сомов",
        "Стоимость лечения рассчитывается индивидуально после очной диагностики и консультации врача.",
      ],
    },
  ];

  return (
    <>
      <div className={"container " + scss.wrapper}>
        <h1 className={scss.title}>
          ЛЕЧЕНИЕ ПО МЕТОДУ РЕЗОРБЦИИ{" "}
          <LinkTop to="/consultation">
            Записаться на прием <img src="/images/nonActiveArrow.svg" alt="arrow"></img>
          </LinkTop>
        </h1>
        <div className={scss.info}>
          {resorbcee.map((el) => (
            <ul key={el.id} className={scss.list}>
              {el.titles.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className={scss.procedure}>
          <ProcedureBlock col={false} />
        </div>
      </div>

      <div className={scss.adapt}>
        <h1 className={scss.title}>
          ЛЕЧЕНИЕ ПО МЕТОДУ РЕЗОРБЦИИ{" "}
          <LinkTop to="/consultation">
            Записаться на прием <img src="/images/nonActiveArrow.svg" alt="arrow"></img>
          </LinkTop>
        </h1>
        <div className={scss.info}>
          {resorbcee.map((el) => (
            <ul key={el.id} className={scss.list}>
              {el.titles.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className={scss.procedure}>
          <ProcedureBlock col={false} block={true}/>
        </div>
      </div>
    </>
  );
});
