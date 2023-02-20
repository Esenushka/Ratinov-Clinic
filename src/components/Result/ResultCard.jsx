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

  const cutword = (str) => {
    if (str.length > 25) {
      return str.slice(0, 22) + "..." + " " + "смотреть еще";
    } else {
      return str;
    }
  };
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
              <li>{beforeComplaints && beforeComplaints}</li>
            </ul>
            <h4>Назначили</h4>
            <ul>
              <li>{appointment && appointment}</li>
            </ul>
            <h4>После лечения:</h4>
            <ul>
              <li>{afterDisease && afterDisease}</li>
              <li>{afterComplaints && afterComplaints}</li>
            </ul>
            <h4>Результат</h4>
            <ul>
              <li>{time && time}</li>
              <li>{timeDes && timeDes}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.card} onClick={() => setModalActive(true)}>
        <img src={img} alt="result_photo" />
        {/* {num === 1 ? <p>{beforeDisease}</p> : <p>Снимок № {num}</p>} */}
        <p>{cutword(beforeComplaints)}</p>
      </div>
    </>
  );
}
