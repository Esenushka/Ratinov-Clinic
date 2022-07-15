import Slider from 'react-slick';
import { ResultsCard } from './ResultsCard';
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

export default function ResultSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="result_slider">
      <Slider {...settings}>
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </Slider>
    </div>
  );
}
