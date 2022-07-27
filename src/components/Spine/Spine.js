import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import scss from "./Spine.module.scss";

export default function Spine() {
  const [infoList, setInfoList] = useState([]);
  useEffect(() => {
    db.collection("spine")
      .get()
      .then((snapshot) => {
        const infoArr = []
        snapshot.forEach((doc) => {
          infoArr.push({ ...doc.data(), id: doc.id })
        })
        setInfoList(infoArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, []);
  return (
    <div className={scss.wrapper_bg}>
      <div className={scss.bg}>
        <img src="/images/spine-bg.png" alt="Задний блок" />
      </div>
      <div className={"container " + scss.wrapper}>
        <h1>Как проходит лечение грыж <span>без операции</span></h1>
        <div className="page-blocks_wrapper">
          <div className="page-block">
            <h4>Диагностика</h4>
            <p>
              Осмотр <span>врача-невролога</span>
              +МРТ исследование, которое позволяет
              максимально точно определить причину боли в спине
            </p>
          </div>
          <div className="page-block">
            <h4>Диагноз и назначение</h4>
            <p>
              <span>Невролог- вертебролог</span>
              оценивает ваши снимки, ставит диагноз и назначает то лечение,
              которое подходит именно ВАМ, с учетом индивидуальных особенностей болезни
            </p>
          </div>
          <div className="page-block">
            <h4>Лечение</h4>
            <p>
              Мы воздействуем локально, влияя на воспаление,
              тем самым повышая обмен веществ в больной области
              при помощи комплексной и современной физиотерапии
            </p>
          </div>
        </div>
        <div className={scss.des}>
          <b>В лечение грыжи позвоночника входит:</b>
          <p>
            {
              infoList.map((info) => <span key={info.id}>{info.title} {info.duration ? <dd> + </dd> : ""}</span>)
            }
          </p>
          <p>
            Набор процедур может отличаться в зависимости
            от индивидуальных особенностей заболевания.
          </p>
          <p>
            <b>Возможные дополнительные процедуры: </b>
            <span>Ударно-волновая терапия + массаж</span>,
            которые могут назначаться лечащими
            врачом после осмотра, анамнеза заболевания,
            доп. анализов (МРТ, анализ крови).
            Больше информации вы сможете получить на очном приеме у врача.
          </p>
          <p>
            После лечения пациенту назначается курс реабилитации в виде лечебной физкультуры
          </p>
          <Link to={"/"}>
            <button className="btn btn-big-bg">
              Записаться к неврологу
            </button>
          </Link>
        </div>
        <div className={scss.info_blocks_wrapper}>
          {
            infoList.map((info) => info.duration ? <div key={info.id} className={scss.info_block}>
              <div className={scss.title}>
                <b>{info.title}</b>
                <b>{info.extraTitle}</b>
              </div>
              <div className={scss.bottom_info}>
                <p>Длительность процедуры: {info.duration} минут</p>
                <p>Курс лечения: {info.from ? "от " + info.from : ""} до {info.to} процедур</p>
              </div>
              <Link to={info.path}>
                <button className="btn btn-small">
                  Подробнее
                </button>
              </Link>
            </div> : "")
          }
        </div>
      </div>
    </div>
  )
}
