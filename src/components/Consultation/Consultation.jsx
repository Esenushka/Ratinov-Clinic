import css from "./Consultation.module.scss";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import { Link } from "react-router-dom";

const Consultaition = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.consultation}>
          <div className={`${css.wrap} container`}>
            <div className={css.consul_des}>
              <span className={css.b}>Получить онлайн консультацию</span>
              <p>
                Предварительная дистанционная консультация <br /> из которой вы
                узнаете о прогнозах вашего <br /> лечения в нашей клинике
              </p>
            </div>
            <LinkTop to={"/consultation"}>
              <button className={css.btn}>Получить консультацию</button>
            </LinkTop>
          </div>
        </div>
      </div>
      <div className={css.adaptive}>
        <h1>Получить <br/> онлайн консультацию</h1>
        <div className={css.line}></div>
        <p>
          Предварительная дистанционная консультация из которой <br/> вы узнаете о
          прогнозах вашего <br/> лечения в нашей клинике
        </p>
        <Link to="consultation">Получить консультацию</Link>
      </div>
    </>
  );
};

export default memo(Consultaition);
