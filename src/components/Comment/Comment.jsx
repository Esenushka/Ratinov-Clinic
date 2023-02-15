import css from "./Comment.module.scss";
import { memo, useState } from "react";

export default memo(function Comment({ comments }) {
  const [comment, setComment] = useState(true);

  return (
    <div className={css.wrapper}>
      <div className={`${css.comment} container`}>
        {comments.map((com) => (
          <div key={com.id} className={css.card}>
            <div className={css.top_block}>
              <div className={comment ? css.name : css.nameAc}>
                <h3 onClick={() => setComment(!comment)}>{com.name}</h3>
                <a href={com.link}>Instagram</a>
              </div>
            </div>
            {comment && (
              <>
                <div className={css.line}></div>
                <div className={css.des}>
                  <p>{com.des}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
