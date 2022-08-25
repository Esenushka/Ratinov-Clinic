import { useState } from "react"
import css from "./Result.module.scss"

export default function ResultCard({ setLoadingImage, img, num, afterComplaints, afterDisease, appointment, beforeComplaints, beforeDisease, time, timeDes }) {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <div className={modalActive ? css.active : css.modal} onClick={(e) => {
        e.stopPropagation()
        setModalActive(false)
      }}>
        <div className={`${css.modal__content} container`} onClick={(e) => {
          e.stopPropagation()
        }}>
          <div className={css.card}>
            <p>Снимок № {num}</p>
            <img onLoad={() => setLoadingImage(false)} src={img} alt="result_photo" />
          </div>
          <div className={css.modalRight__block}>
            <div className={css.before}>
              <h4>+ Жалобы до лечения: </h4>
              <div className={css.des}>
                <p>{beforeComplaints}</p>
                <span>{beforeDisease}</span>
              </div>
            </div>
            <h4>Назначили: {appointment}</h4>
            <div className={css.after}>
              <h4>- После лечения: </h4>
              <div className={css.des}>
                <span>{afterDisease}</span>
                <p>{afterComplaints}</p>
              </div>
            </div>
            <div>
              <p>{time}</p>
              <p>{timeDes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.card} onClick={() => setModalActive(true)}>
        <img src={img} alt="result_photo" />
        <p>Снимок № {num}</p>
      </div>
    </>
  )
}