import Slider from "react-slick";
import scss from "./ResultsSlider.module.scss";
import { result } from "../../constants/results";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={scss.arrowR}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={scss.arrowL}
      onClick={onClick}
    />
  );
}

export default memo(function ResultsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => <span className={scss.dots}></span>,
  };
  return (
    <>
      <div className="container result_slider">
        <div className={scss.wrapper}>
          <h1>
            Наши результаты
            <LinkTop to="/result">
              Показать еще <img alt="arrow" src="/images/Arrow2.png" />
            </LinkTop>
          </h1>
          <Slider {...settings}>
            {result.map((el) => (
              <div className={scss.card} key={el.id} {...el}>
                <img src={el.img} alt="img"></img>
                <p>Снимок №{el.number}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={scss.adapt}>
        <h1>
          Наши результаты
          <LinkTop to="/result">
            Показать еще <img alt="arrow" src="/images/Arrow2.png" />
          </LinkTop>
        </h1>
        <div className={scss.adSlider}>
          {result.map((el) => (
            <div className={scss.card} key={el.id} {...el}>
              <img src={el.img} alt="img"></img>
              <p>Снимок №{el.number}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
