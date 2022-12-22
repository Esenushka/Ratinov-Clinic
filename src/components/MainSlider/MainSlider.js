import Slider from "react-slick";
import MainSliderCard from "./MainSliderCard";
import scss from "./MainSlider.module.scss";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import { sliderContent } from "../../constants/sliderContent";

function SampleNextArrow(props) {
  const { className, style, onClick, num, setNum } = props;
  return (
    <img
      src="/images/slider-arrow.svg"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={() => {
        setNum((prev) => (prev < 3 ? prev + 1 : (prev = 3)));
        num < 3 && onClick();
      }}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick, num, setNum } = props;
  return (
    <img
      src="/images/slider-arrow.svg"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={() => {
        setNum((prev) => (prev > 1 ? prev - 1 : (prev = 1)));
        num > 1 && onClick();
      }}
    />
  );
}

export default memo(function MainSlider() {
  const [num, setNum] = useState(1);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow num={num} setNum={setNum} />,
    prevArrow: <SamplePrevArrow num={num} setNum={setNum} />,
    customPaging: () => <span className={scss.dots}></span>,
  };
  return (
    <div className={"container main_slider " + scss.wrapper}>
      <div className={scss.left}>
        <h1>
          <font >
          Истории и отзывы </font>  
        наших пациентов после лечения
        </h1>
        <p>
          Метод резорбции - уменьшение и заживление грыжи, вплоть до полного ее
          исчезновения или рубцевания.
        </p>
        <span>Подробнее</span>
        <div className={scss.btns}>
          <Link to={"/comment"}>
            <button className="btn btn-big-bg">Отзывы</button>
          </Link>
          {sliderContent.map(
            (el) =>
              el.id === num && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={el.link}
                  className="btn btn-watch"
                >
                  Смотреть видео
                </a>
              )
          )}
        </div>
      </div>
      <Slider {...settings}>
        {sliderContent.map((item) => (
          <MainSliderCard src={item.src} />
        ))}
      </Slider>
    </div>
  );
});
