import scss from "./YouTubeSlider.module.scss";
import Slider from "react-slick";
import YouTubeSliderCard from "./YouTubeSliderCard";
import { memo, useState, useEffect } from "react";
import { db } from "../../config/firebase";

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

export default memo(function YouTubeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => <span className={scss.dots}></span>,
  };
  const [youtubeData, setYoutubeData] = useState([]);
  useEffect(() => {
    db.collection("youtubeContent")
      .orderBy("id", "asc")
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setYoutubeData(items);
      });
  }, []);

  return (
    <div className={"container youtube_slider " + scss.wrapper}>
      <h1>
        УЗНАЙТЕ О СВОЕМ ЗДОРОВЬЕ БОЛЬШЕ{" "}
        <a
          href="https://www.youtube.com/watch?v=sJH0L6xaxCA"
          rel="noreferrer"
          target="_blank"
        >
          Youtube канал <img src="/images/Arrow2.png" alt="arrow" />
        </a>
      </h1>

      <Slider {...settings}>
        {youtubeData.map((el) => (
          <YouTubeSliderCard key={el.id} {...el} />
        ))}
      </Slider>
    </div>
  );
});
