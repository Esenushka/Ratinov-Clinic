import { memo, useState } from "react";
import LinkTop from "../../hooks/LinkTop";
import scss from "./Doctor.module.scss";
import DoctorCard from "./DoctorCard";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default memo(function Doctor({
  photo,
  name,
  year,
  specialization,
  day_work,
  info,
  img,
  diplomas,
  price,
  proffesions,
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="container">
        <div className={scss.top}>
          <div className={scss.left}>
            <img src={photo || img} alt={name} />
          </div>
          <div className={scss.right}>
            <h1>{name}</h1>
            <h5>{proffesions}</h5>
            <div className={scss.textLine}></div>
            <p></p>
            <ul>
              <li>
                {specialization
                  ? specialization
                  : "    95 % пациентов уходят от нас здоровыми и довольными результатом."}
              </li>
            </ul>
            <div className={scss.textLine}></div>
            <span>
              <p>Дни Приема: </p> {day_work}
            </span>
            <div className={scss.textLine}></div>
            <div className={scss.PrTn}>
              {price === 0 ? <p></p> : <p>Стоимость приёма {price} сомов</p>}
              <LinkTop to={"/consultation"}>Записаться на приём</LinkTop>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.mainLine}></div>
      <div className={scss.doctor_card_wrapper}>
        {info?.map((des) => (
          <DoctorCard key={des.id} {...des} />
        ))}
      </div>
      {diplomas.length > 1 && (
        <div className={scss.diplooo}>
          <h1 onClick={() => setActive(!active)} className="container">
            Дипломы и сертификаты{" "}
            <div className={active ? scss.plusAc : scss.plus}></div>
          </h1>
          {active && (
            <div className="container" id={scss.diploItem}>
              <PhotoProvider>
                {diplomas.map((el) => (
                  <div className={scss.diplom} key={el}>
                    <PhotoView src={el}>
                      <img src={el} alt="Диплом" />
                    </PhotoView>
                  </div>
                ))}
              </PhotoProvider>
            </div>
          )}
        </div>
      )}
    </>
  );
})
