import css from "./Doctor.module.scss";
import Slider from "react-slick";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import DoctorAdaptive from "../DoctorsCard/DoctorAdaptive";
import { memo, useState } from "react";
import { useEffect } from "react";
import { db } from "../../config/firebase";
import LinkTop from "../../hooks/LinkTop";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={css.arrowR}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <img
      src="/images/Arrow.svg"
      alt="Стрелка"
      className={css.arrowL}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const DoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = [];
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        });
        setDoctors(
          doctorsArr.sort((a, b) => parseFloat(a.imgPos) - parseFloat(b.imgPos))
        );
      });
  }, []);
  
  return (
    <>
      <div className={`${css.wrapper} container`}>
        <h1>
          Наши Врачи
          <p>
            <LinkTop to="/doctors">
              Посмотреть всех <img alt="arrow" src="/images/nonActiveArrow.svg"></img>
            </LinkTop>
          </p>
        </h1>
        <Slider className={`${css.slider} doctor_slider`} {...settings}>
          {doctors.map((doctor) => (
            <DoctorsCard fullSize key={doctor.id} {...doctor} />
          ))}
        </Slider>
      </div>

      <div className={css.adapt}>
        <h1 className={css.title} style={{marginBottom:"30px"}}>
          Наши Врачи
          <p>
            <LinkTop to="/doctors">
              Посмотреть всех <img alt="arrow" src="/images/nonActiveArrow.svg"></img>
            </LinkTop>
          </p>
        </h1>
        <div className={css.slider}>
          {doctors.map((doctor) => (
            <DoctorAdaptive fullSize key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(DoctorSlider);
