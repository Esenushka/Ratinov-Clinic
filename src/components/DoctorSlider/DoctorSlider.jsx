import css from './Doctor.module.scss';
import Slider from "react-slick";
import DoctorsCard from '../DoctorsCard/DoctorsCard';
import { memo, useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../config/firebase';
import LinkTop from '../../hooks/LinkTop';

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

const DoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = []
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        })
        setDoctors(doctorsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      });
  }, [])
  return (
    <div className={`${css.wrapper} container`}>
      <h1>Наши <b>Врачи</b></h1>
      <Slider className={`${css.slider} doctor_slider`} {...settings}>
        {doctors.map((doctor) => (
          <DoctorsCard fullSize key={doctor.id} {...doctor} />
        ))}
      </Slider>
      <LinkTop to="/doctors">
        <div className={css.all_doc}>
          <img src="/images/slider-arrow.svg" alt="select-arrow" />
          Показать всех специалистов
        </div>
      </LinkTop>
    </div>
  );
}

export default memo(DoctorSlider);
