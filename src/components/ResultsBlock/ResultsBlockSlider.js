import Slider from 'react-slick';

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

export default function ResultSlider({ setActiveSlide }) {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setActiveSlide(current),
  };
  return (
    <div className="result_slider">
      <Slider {...settings}>
        <div>
          <p>СНИМОК №1</p>
          <img src="/images/SliderImg.png" alt="ResultsBlockSlider" />
        </div>
        <div>
          <p>СНИМОК №2</p>
          <img src="/images/SliderImg.png" alt="ResultsBlockSlider" />
        </div>
        <div>
          <p>СНИМОК №3</p>
          <img src="/images/SliderImg.png" alt="ResultsBlockSlider" />
        </div>
      </Slider>
    </div>
  );
}
