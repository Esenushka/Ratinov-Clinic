import Slider from "react-slick";
import MainSliderCard from "./MainSliderCard";
import scss from "./MainSlider.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";
import { sliderContent } from "../../constants/sliderContent";
import React from "react";

function SampleNextArrow(props) {
  return "";
}
function SamplePrevArrow(props) {
  return "";
}

export default memo(function MainSlider() {
  const [num, setNum] = React.useState(1);

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
        <h1>Истории Наших пациентов после лечения</h1>
        <div className={scss.line}></div>
        <p>
          Метод резорбции - уменьшение и заживление грыжи, вплоть до полного ее
          исчезновения или рубцевания.
        </p>
        <span style={{ transition: "ease-in-out .4s" }}>
          <p>Подробнее</p>
          <img
            style={{ marginLeft: "10px" }}
            src={"/images/nonActiveArrow.svg"}
            alt="aroow"
          ></img>
        </span>
        <div className={scss.line}></div>
        <div className={scss.btns}>
          <Link to={"/comment"}>
            <button style={{ fontWeight: "500" }} className="btn btn-big-bg">
              Отзывы
            </button>
          </Link>
          {sliderContent.map(
            (el) =>
              el.id === num && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={el.link}
                  className={scss.btn}
                >
                  <div className={scss.play}></div>
                  <p>Смотреть видео</p>
                </a>
              )
          )}
        </div>
      </div>
      <Slider className={scss.slider} {...settings}>
        {sliderContent.map((item) => (
          <MainSliderCard src={item.src} />
        ))}
      </Slider>
    </div>
  );
});
