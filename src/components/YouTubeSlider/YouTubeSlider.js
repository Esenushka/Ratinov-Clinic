import scss from "./YouTubeSlider.module.scss"
import Slider from "react-slick"
import YouTubeSliderCard from "./YouTubeSliderCard";
import { YouTubeSliderList } from "../../constants/YoutubeSliderList";

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

export default function YouTubeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => (
      <span className={scss.dots}></span>
    )
  };
  return (
    <div className={"container youtube_slider " + scss.wrapper}>
      <Slider {...settings}>
        {
          YouTubeSliderList.map((el) => <YouTubeSliderCard key={el.id} {...el}/>)
        }
      </Slider>
    </div>
  )
}
