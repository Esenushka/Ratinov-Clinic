import css from './Doctor.module.scss';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
import { useEffect, useState } from "react";
import { db } from '../../config/firebase';

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
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const doctorsArr = []
        snapshot.forEach((doc) => {
          doctorsArr.push({ ...doc.data(), id: doc.id });
        })
        setDoctors(doctorsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={`${css.wrapper} container`}>
      <h1>Наши <b>Врачи</b></h1>
      <Slider className={`${css.slider} doctor_slider`} {...settings}>
        {doctors.map((doctor) => (
          <DoctorsCard key={doctor.id} {...doctor} />
        ))}
      </Slider>
      <Link to="/doctors">
        <div className={css.all_doc}>
          <img src="/images/slider-arrow.svg" alt="select-arrow" />
          Показать всех специалистов
        </div>
      </Link>
    </div>
  );
}

export default DoctorSlider;
