import css from "./Comment.module.scss";
import { memo } from "react";

export default memo(function Comment({ comments }) {
  return (
    <div className={css.wrapper}>
      <div className={`${css.comment} container`}>
        {comments.map((com) => (
          <div key={com.id} className={css.card}>
            <div className={css.top_block}>
              <div className={css.name}>
                <h3>{com.name}</h3>
                <a href={com.link}>Instagram</a>
              </div>
            </div>
            <div className={css.line}></div>
            <div className={css.des}>
              <p>{com.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
