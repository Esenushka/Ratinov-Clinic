import { memo, useState } from "react";
import { Link } from "react-router-dom";
import LinkTop from "../../hooks/LinkTop";
import scss from "./FAQ.module.scss";

export default memo(function FAQCard({ title, buttons, info, type, index }) {
  const [active, setActive] = useState(false);

  return (
    <div className={scss.block}>
      <span onClick={() => setActive(!active)}>
        <p>
          {index + 1}. {title}
        </p>
        <div
          className={active ? scss.plusAc : scss.plus}
          onClick={() => setActive(!active)}
        ></div>
      </span>
      <div className={scss.info_wrapper + " " + (active ? scss.active : "")}>
        {type === 1 ? (
          <ul className={scss.info + " " + scss.bold}>
            {info.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
          </ul>
        ) : type === 1.1 ? (
          <ul className={scss.info + " " + scss.bold_reverse}>
            {info.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
          </ul>
        ) : type === 2 ? (
          <ul className={scss.info}>
            {info.map((el) => (
              <li key={el.id}>
                <span>{el.bold}</span> -{el.text}
              </li>
            ))}
          </ul>
        ) : type === 3 ? (
          <ul className={scss.info + " " + scss.with_link}>
            {info.map((el) =>
              el.reverse ? (
                <li key={el.id}>
                  {el.text} <Link to={el.path}>{el.link}</Link>
                </li>
              ) : (
                <li key={el.id}>
                  <Link to={el.path}>{el.link}</Link> {el.text}
                </li>
              )
            )}
          </ul>
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
          <ul className={scss.info}>
            {info.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
          </ul>
        ) : type === 5 ? (
          <ul className={scss.info}>
            {info.map((el) => (
              <li key={el.id}>
                {el.text}
                <span> {el.bold}</span>
              </li>
            ))}
          </ul>
        ) : type === 6 ? (
          <ul className={scss.info + " " + scss.procedure_bold}>
            {info.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
            <li>В эту стоимотсь входит:</li>
          </ul>
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
              <LinkTop key={el.id} to={"/doctors?" + el.path + "&"}>
                <button className="btn btn-small">{el.btn}</button>
              </LinkTop>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
