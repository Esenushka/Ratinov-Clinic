import { useState } from "react";
import css from "./Result.module.scss";

export default function ResultCard({
  setLoadingImage,
  img,
  num,
  afterComplaints,
  afterDisease,
  appointment,
  beforeComplaints,
  beforeDisease,
  time,
  timeDes,
}) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div
        className={modalActive ? css.active : css.modal}
        onClick={(e) => {
          e.stopPropagation();
          setModalActive(false);
        }}
      >
        <div
          className={`${css.modal__content} container`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span onClick={() => setModalActive(false)} className={css.x}>
            &#10005;
          </span>
          <div className={css.cardModal}>
            <img
              onLoad={() => setLoadingImage(false)}
              src={img}
              alt="result_photo"
            />
            <p>Снимок № {num}</p>
          </div>
          <div className={css.modalRight__block}>
            <div className={css.verticalLine}></div>
            <h4>Жалобы до лечения:</h4>
            <ul>
              <li>{beforeComplaints}</li>
            </ul>
            <h4>Диагноз</h4>
            <ul>
              <li>{beforeComplaints}</li>
            </ul>
            <h4>После лечения:</h4>
            <ul>
              <li>{afterDisease}</li>
              <li>{afterComplaints}</li>
            </ul>
            <h4>Назаначили</h4>
            <ul>
              <li>{time}</li>
              <li>{timeDes}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.card} onClick={() => setModalActive(true)}>
        <img src={img} alt="result_photo" />
        <p>Снимок № {num}</p>
      </div>
    </>
  );
}
