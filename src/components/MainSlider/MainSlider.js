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
        <h1>
          Истории Наших <br /> пациентов после <br /> лечения
        </h1>
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
                  key={el.id}
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
          <MainSliderCard key={item.src} src={item.src} />
        ))}
      </Slider>
      <div className={scss.adaptive}>
        <h1>Истории Наших пациентов после лечения</h1>
        <div className={scss.line}></div>
        <p>
          Метод резорбции - уменьшение <br /> и заживление грыжи, вплоть до{" "}
          <br /> полного ее исчезновения <br /> или рубцевания.
        </p>
        <span
          style={{ transition: "ease-in-out .4s", cursor: "pointer" }}
          className={scss.more}
        >
          <p style={{ color: "#0097db" }}>Подробнее</p>
          <img
            style={{ marginLeft: "10px" }}
            src={"/images/nonActiveArrow.svg"}
            alt="aroow"
          ></img>
        </span>
        <div className={scss.line}></div>
        <iframe
          className={scss.video}
          src="https://www.youtube.com/embed/Pt6f68qRRWQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className={scss.line}></div>

        <div className={scss.linka}>
          <Link to={"/comment"}>Отзывы</Link>
          <Link
            to={"/result"}
            // rel="noreferrer"
            // target="_blank"
            // href={"https://www.youtube.com/@doctor_ratinov"}
            className={scss.btn}
          >
            <div className={scss.play}></div>
            Результаты
          </Link>
        </div>
      </div>
    </div>
  );
});
