import { memo, useState } from "react";
import css from "./Comment.module.scss";

const CommentCard = ({ name, link, des }) => {
  const [isActive, setActive] = useState(true);
  return (
    <div className={css.card}>
      <div className={css.top_block}>
        <img className={css.user} src="/images/avatarImg.png" alt="" />
        <div className={css.name}>
          <h3>{name}</h3>
          <a href={link}>Instagram</a>
        </div>
      </div>
      <div className={css.des}>
        {isActive ? <p>{des}</p> : <p className={css.nonAc}>{des}</p>}
        <h5 onClick={() => setActive(!isActive)}>
          {isActive ? "Читать полностью" : "Скрыть"}
        </h5>
      </div>
    </div>
  );
};

export default memo(CommentCard);
