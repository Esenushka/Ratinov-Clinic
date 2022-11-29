import css from "./Comment.module.scss";
import { memo } from "react";

export default memo(function Comment({ setLoadingImage, comments }) {
  return (
    <div className={css.wrapper}>
      <div className={css.bg}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fvrachi-izuchajut-analizy%202.png?alt=media&token=83a0e367-513b-4bc4-8b31-6a88b7ecea5e"
          alt="Задний фон"
        />
        <div className={css.color}></div>
      </div>
      <div className={`${css.comment} container`}>
        {comments.map((com) => (
          <div key={com.id} className={css.card}>
            <div className={css.top_block}>
              <div className={css.name}>
                <h3>{com.name}</h3>
                <a href={com.link}>Ссылка на соцсеть</a>
              </div>
            </div>
            <div className={css.des}>
              <img src="/images/InvertedCommas.svg" alt="Ковычки" />
              <p>{com.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
