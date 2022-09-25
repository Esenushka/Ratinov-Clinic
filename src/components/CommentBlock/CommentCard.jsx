import { memo } from "react";
import css from "./Comment.module.scss"

const CommentCard = ({ name, link, des }) => {
    return (
        <div className={css.card}>
            <div className={css.top_block}>
                <div className={css.name}>
                    <h3>{name}</h3>
                    <a href={link}>Ссылка на соцсеть</a>
                </div>
            </div>
            <div className={css.des}>
                <img src="/images/InvertedCommas.svg" alt="" />
                <p>{des}</p>
            </div>
        </div>
    );
}

export default memo(CommentCard);
