import Slider from "react-slick";
import MainSliderCard from "./MainSliderCard";
import scss from "./MainSlider.module.scss"
import { Link } from "react-router-dom"
import { memo } from "react";

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

export default memo(function MainSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => (
      <span className={scss.dots}></span>
    )
  };
  return (
    <div className={"container main_slider " + scss.wrapper}>
      <div className={scss.left}>
        <h1>
          <span>Истории и отзывы </span>
          наших пациентов после лечения
        </h1>
        <p>Метод резорбции - уменьшение и заживление  грыжи,
          вплоть до полного ее исчезновения или рубцевания.</p>
        <span>Подробнее</span>
        <div className={scss.btns}>
          <Link to={"/comment"}>
            <button className="btn btn-big-bg">Отзывы</button>
          </Link>
          <a href="https://youtu.be/TSaxBAf_FZY" className="btn btn-watch">
            Смотреть видео
          </a>
        </div>
      </div>
      <Slider {...settings}>
        <MainSliderCard />
        <MainSliderCard />
        <MainSliderCard />
      </Slider>
    </div>
  )
})
