import css from "./Comment.module.scss"
import { commentList } from "../../constants/commentList";
import Slider from "react-slick";
import CommentCard from "./CommentCard";

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
  return (
    <div className={css.comment_block}>
      <div className={`${css.wrapper} container`}>
        <div className={css.title}>
          <h1>Отзывы</h1>
          <button className="btn btn-small">Все отзывы</button>
        </div>
        <Slider className={`${css.slider} comment_slider`} {...settings} >
          {
            commentList.map((e) => (
              <CommentCard key={e.id} {...e} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default CommentBlock;
