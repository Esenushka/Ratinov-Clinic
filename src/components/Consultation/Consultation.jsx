import css from "./Consultation.module.scss";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

const Consultaition = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.consultation}>
        <div className={`${css.wrap} container`}>
          <div className={css.consul_des}>
            <span className={css.b}>Получить онлайн консультацию</span>
            <p>
              Предварительная дистанционная консультация из которой вы узнаете о
              прогнозах вашего лечения в нашей клинике
            </p>
          </div>
          <LinkTop to={"/consultation"}>
            <button className={css.btn}>Получить консультацию</button>
          </LinkTop>
        </div>
      </div>
    </div>
  );
};

export default memo(Consultaition);
