import { memo, useState } from "react";
import css from "./Comment.module.scss";

const CommentCard = ({ name, link, des }) => {
  const [isActive, setActive] = useState(true);
  return (
    <div className={css.card}>
      <div className={css.top_block}>
        <div className={css.name}>
          <h3>{name}</h3>
          <a href={link}>Instagram</a>
        </div>
      </div>
      <div className={css.des}>
        {isActive ? (
          <p>
            {des.substr(0, 80)}...
            <span onClick={() => setActive(!isActive)}>
              {isActive ? "Читать полностью" : ""}
            </span>
          </p>
        ) : (
          <p className={css.nonAc}>
            {des}
            <div onClick={() => setActive(!isActive)}>
              {isActive ? "" : "Скрыть"}
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(CommentCard);
