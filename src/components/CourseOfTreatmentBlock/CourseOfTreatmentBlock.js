import scss from "./CourseOfTreatmentBlock.module.scss"
import { Link } from "react-router-dom"
import ProcedureBlock from "./ProcedureBlock"

export default function CourseOfTreatmentBlock() {
  return (
    <div className={"container " + scss.wrapper}>
      <h1 className={scss.title}><span>Что входит</span> в курс лечения?</h1>
      <h1 className={scss.blue_title}>ЛЕЧЕНИЕ ПО МЕТОДУ РЕЗОРБЦИИ</h1>
      <div className={scss.blocks_wrapper}>
        <div className={scss.block}>
          <b>Резорбция</b> - процесс уменьшения грыжи, вплоть до полного ее исчезновения или рубцевания.
          Процесс осуществляется за счет врожденного иммунитета,
          но не всегда наступает самостоятельно и требует много времени.
        </div>
        <div className={scss.block}>
          <span>Стоимость лечения 36 400 сомов,</span>
          при единоразовой оплате стоимость уменьшается
          до 22 400 сомов.
        </div>
      </div>
      <div className={scss.info}>
        <span>
          В норме скорость естественной резорбции невысокая - <b>около 12-15 месяцев.</b>
          <p>Процедуры безопасны и не требуют постоянного нахождения в больнице, поэтому лечение прЗаписаться на приёмоводится амбулаторно и занимает в день 25-50 минут.</p>
        </span>
        <p>
          Узнать о возможности лечения можно только на очной консультации у врача
        </p>
      </div>
      <div className={scss.procedure}>
        <h2>
          Мы создаем необходимые условия, чтобы запустить и  ускорить процесс резорбции, применяя комплексную физиотерапию:
        </h2>
        <ProcedureBlock col={false}/>
        <Link className={scss.btn} to="/">
          <button className="btn btn-big-bg">Записаться на приём</button>
        </Link>
      </div>
    </div>
  )
}
