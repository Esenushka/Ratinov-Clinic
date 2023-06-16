import css from "./Comment.module.scss";
import Slider from "react-slick";
import CommentCard from "./CommentCard";
import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../config/firebase";
import LinkTop from "../../hooks/LinkTop";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={css.arrowR}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={css.arrowL}
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
  const [comments, setComments] = useState([]);
  useEffect(() => {
    db.collection("comments")
      .get()
      .then((snapshot) => {
        const commentsArr = [];
        snapshot.forEach((doc) => {
          commentsArr.push({ ...doc.data(), id: doc.id, active: false });
        });
        setComments(
          commentsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
      });
  }, []);

  const handleClick = (id, state) => {
    const filtered = [...comments].find((comment) => comment.id === id);
    if (state === "toActive") {
      const arr = comments.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: true };
        }
        return { ...el, active: false };
      });
      setComments(arr);
    } else {
      const arr = comments.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: false };
        }
        return { ...el, active: false };
      });
      setComments(arr);
    }
  };
  return (
    <div className={css.comment_block}>
      <div className={`${css.wrapper} container`}>
        <div className={css.title}>
          <h1>
            Отзывы{" "}
            <p>
              <LinkTop to="/comment">
                Все отзывы <img alt="Roow" src="/images/nonActiveArrow.svg"></img>
              </LinkTop>
            </p>
          </h1>
        </div>
        <Slider className={`${css.slider} comment_slider`} {...settings}>
          {comments.map((e) => (
            <CommentCard key={e.id} {...e} handleClick={handleClick} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default memo(CommentBlock);
