import Slider from "react-slick";
import scss from "./ResultsSlider.module.scss"
import { Link } from "react-router-dom"
import { result } from "../../constants/results";
import { useState } from "react";

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

export default function ResultsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: current => setActiveSlide(current),
    customPaging: () => (
      <span className={scss.dots}></span>
    )
  };
  return (
    <div className={scss.main_wrapper}>
      <div className="container result_slider">
        <div className={scss.wrapper}>
          <div className={scss.left}>
            <h1>наши <span>результаты</span></h1>
            <p>
              Уже более 3 000 довольных пациентов избавились
              от боли в спине и уменьшили грыжу без операции!
              <Slider {...settings}>
                {
                  result.map((result) => <div key={result.id} className={scss.card}>
                    <h3>СНИМОК №{result.number}</h3>
                    <img src={result.img} alt={"СнимокТ №" + result.number} />
                  </div>)
                }
              </Slider>
            </p>
          </div>
          <div className={scss.right}>
            <Link to="/results">
              <button className="btn btn-small">Показать ещё</button>
            </Link>
            <div className={scss.before_after_wrapper}>
              <div className={scss.before}>
                <h4><span>+</span> Жалобы до лечения:</h4>
                {
                  result[activeSlide].before.map((before) => <p key={before.id}>{before.text}</p>)
                }
              </div>
              <p>{result[activeSlide].centerText}</p>
              <div className={scss.after}>
                <h4><span>-</span>После лечения:</h4>
                {
                  result[activeSlide].after.map((after) => <p key={after.id}>{after.text}</p>)
                }
              </div>
              <p>
                <span>Результат за 4 месяца</span>
                (с учётом перерывов между курсами, в течение от 1 до 3 месяцев)
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className={scss.bg}>
        <img src="/images/result-bg.svg" alt="Результат задний фон"/>
      </span>
    </div>
  )
}
