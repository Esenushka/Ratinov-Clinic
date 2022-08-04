import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import css from "./Comment.module.scss"
import { Link } from "react-router-dom";

export default function Comment() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    db.collection("comments")
      .get()
      .then((snapshot) => {
        const commentsArr = []
        snapshot.forEach((doc) => {
          commentsArr.push({ ...doc.data(), id: doc.id });
        })
        setComments(commentsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, []);
  return (
    <div className={css.wrapper}>
      <div className={css.bg}>
        <img src="/images/comment-back.svg" alt="Background for CommentPage" />
        <div className={css.color}></div>
      </div >
      <div className={`${css.comment} container`}>
        {
          comments.map((com) => (
            <div className={css.card}>
              <div className={css.top_block}>
                <img src={com.img} alt="person-img" />
                <div className={css.name}>
                  <h3>{com.name}</h3>
                  <Link to={com.link}>Ссылка на соцсеть</Link>
                </div>
              </div>
              <div className={css.des}>
                <img src="/images/InvertedCommas.svg" alt="" />
                <p>{com.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
