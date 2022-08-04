import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import css from "./Comment.module.scss"
import Slider from "react-slick";
import CommentCard from "./CommentCard";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="/images/slider-arrow.svg"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="/images/slider-arrow.svg"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}


const CommentBlock = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
    <div className={css.comment_block}>
      <div className={css.bg_block}>
        <img src="/images/comment-back.svg" alt="background_image" />
        <div className={css.color_block}></div>
      </div>
      <div className={`${css.wrapper} container`}>
        <div className={css.title}>
          <h1>Отзывы</h1>
          <Link to="/"><button className="btn btn-small">Все отзывы</button></Link>
        </div>
        <Slider className={`${css.slider} comment_slider`} {...settings} >
          {
            comments.map((e) => (
              <CommentCard key={e.id} {...e} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default CommentBlock;
