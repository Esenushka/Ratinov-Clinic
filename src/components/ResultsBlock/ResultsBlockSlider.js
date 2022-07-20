import Slider from 'react-slick';
import { resultSliderImages } from '../../constants/ResultBlock';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/ResultNextArrow.png"
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
    <img
      src="/images/ResultPrevArrow.png"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function ResultSlider({ setActiveSlide, activeSlide }) {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setActiveSlide(current),
    beforeChange: (current, next) => setActiveSlide(next),
  };
  return (
    <div className="result_slider">
      <Slider {...settings}>
        {resultSliderImages.map((img, index) => (
          <div
            className={index === activeSlide ? 'resultSlider resultSliderActive' : 'resultSlider'}
            key={index}>
            <p>{img.text}</p>
            <img src={img.img} alt="ResultsBlockSlider" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
