import { memo, useState } from "react";
import { Link } from "react-router-dom";
import ProcedureBlock from "../CourseOfTreatmentBlock/ProcedureBlock";
import scss from "./FAQ.module.scss";

export default memo(function FAQCard({ title, buttons, info, type }) {
  const [active, setActive] = useState(false);

  return (
    <div className={scss.block}>
      <span onClick={() => setActive(!active)}>
        <img
          className={active ? scss.active : ""}
          src="/images/slider-arrow.svg"
          alt="Стрелка"
        />
        <p>{title}</p>
      </span>
      <div className={scss.info_wrapper + " " + (active ? scss.active : "")}>
        {type === 1 ? (
          <div className={scss.info + " " + scss.bold}>
            {info.map((el) => (
              <p key={el.id}>{el.text}</p>
            ))}
          </div>
        ) : type === 1.1 ? (
          <div className={scss.info + " " + scss.bold_reverse}>
            {info.map((el) => (
              <p key={el.id}>{el.text}</p>
            ))}
          </div>
        ) : type === 2 ? (
          <div className={scss.info}>
            {info.map((el) => (
              <p key={el.id}>
                <span>{el.bold}</span> -{el.text}
              </p>
            ))}
          </div>
        ) : type === 3 ? (
          <div className={scss.info + " " + scss.with_link}>
            {info.map((el) =>
              el.reverse ? (
                <p key={el.id}>
                  {el.text} <Link to={el.path}>{el.link}</Link>
                </p>
              ) : (
                <p key={el.id}>
                  <Link to={el.path}>{el.link}</Link> {el.text}
                </p>
              )
            )}
          </div>
        ) : type === "phone" ? (
          <div className={scss.info + " " + scss.phone}>
            {info.map((el) => (
              <p key={el.id}>
                <img src="/images/HeaderPhone.svg" alt="Телефон" />
                {el.phone}
                {el.whatsapp ? " (WhatsApp)" : ""}
              </p>
            ))}
          </div>
        ) : type === 4 ? (
          <div className={scss.info}>
            {info.map((el) => (
              <p key={el.id}>{el.text}</p>
            ))}
          </div>
        ) : type === 5 ? (
          <div className={scss.info}>
            {info.map((el) => (
              <p key={el.id}>
                {el.text}
                <span> {el.bold}</span>
              </p>
            ))}
          </div>
        ) : type === 6 ? (
          <div className={scss.info + " " + scss.procedure_bold}>
            {info.map((el) => (
              <p key={el.id}>{el.text}</p>
            ))}
            <p>В эту стоимотсь входит:</p>
            <ProcedureBlock col={true} />
          </div>
        ) : (
          ""
        )}

        {buttons.length > 0 ? (
          <div
            className={
              scss.btns + " " + (buttons?.length === 1 ? scss.only_one : "")
            }
          >
            {buttons.map((el) => (
              <Link key={el.id} to={"/doctors?" + el.path + "&"}>
                <button className="btn btn-small">{el.btn}</button>
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
})
