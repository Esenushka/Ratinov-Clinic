import { memo } from "react";
import { Link } from "react-router-dom";
import css from "./Comment.module.scss"

const CommentCard = ({ img, name, link, des }) => {
    return (
        <div className={css.card}>
            <div className={css.top_block}>
                <img src={img} alt="person-img" />
                <div className={css.name}>
                    <h3>{name}</h3>
                    <Link to={link}>Ссылка на соцсеть</Link>
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
