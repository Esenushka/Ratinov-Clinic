import { memo, useState } from "react";
import css from "./Comment.module.scss";

const CommentCard = ({ name, link, des, id, handleClick, active }) => {
  return (
    <div className={css.card}>
      <div className={css.top_block}>
        <div className={css.name}>
          <h3>{name}</h3>
          <a href={link}>Instagram</a>
        </div>
      </div>
      <div className={css.des}>
        {active ? (
          <p className={css.nonAc}>
            {des}
            <div onClick={() => handleClick(id, "toNonActive")}>
              {active ? "Скрыть" : ""}
            </div>
          </p>
        ) : (
          <p>
            {des.substr(0, 80)}...
            <span onClick={() => handleClick(id, "toActive")}>
              {active ? "" : "Читать полностью"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(CommentCard);
