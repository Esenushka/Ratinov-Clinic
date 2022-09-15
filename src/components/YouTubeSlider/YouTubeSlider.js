import scss from "./YouTubeSlider.module.scss";
import Slider from "react-slick";
import YouTubeSliderCard from "./YouTubeSliderCard";
import { memo, useState, useEffect } from "react";
import { db } from "../../config/firebase";


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

export default memo(function YouTubeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => (
      <span className={scss.dots}></span>
    )
  };
  const [youtubeData, setYoutubeData] = useState([]);
  useEffect(() => {
    db.collection("youtubeContent")
      .orderBy("id", "asc").get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setYoutubeData(items);
      });
  }, []);

  return (
    <div className={"container youtube_slider " + scss.wrapper}>
      <Slider {...settings}>
        {
          youtubeData.map((el) => <YouTubeSliderCard key={el.id} {...el} />)
        }
      </Slider>
    </div>
  )
})
