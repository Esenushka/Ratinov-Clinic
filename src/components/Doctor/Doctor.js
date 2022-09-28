import { useState } from "react"
import LinkTop from "../../hooks/LinkTop"
import scss from "./Doctor.module.scss"
import DoctorCard from "./DoctorCard"

export default function Doctor({ photo, name, year, specialization, day_work, info, img, diplomas, price }) {

  const leftList = info?.slice(0, 3)
  const rightList = info?.slice(3)
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <div className={scss.top}>
        <div className={scss.left}>
          <img src={photo || img} alt={name} />
        </div>
        <div className={scss.right}>
          <h1>{name}</h1>
          <strong>невролог-вертебролог, мануальный терапевт, радиолог, иглорефлексотерапевт</strong>
          <span>C {year} года является представителем безоперационного лечения грыж  по методу “моделируемая резорбция”</span>
          <p>{specialization}</p>
          <ul>
            <li>Врач занимается лечением межпозвонковых грыж без операции методом резорбции.</li>
            <li>В лечении применяются передовые физиотерапевтические технологии.</li>
            <li>95 % пациентов уходят от нас здоровыми и довольными результатом.</li>
          </ul>
          <span>{day_work}</span>
          <div>
            {
              price === 0 ? <p></p> : <p>
                Стоимость приёма
                <span>{price} сомов</span>
              </p>
            }
            <LinkTop to={"/consultation"}>
              <button className="btn btn-big-bg">
                Записаться на приём
              </button>
            </LinkTop>
          </div>
        </div>
      </div>
      <div className={scss.info_wrapper + " " + (info?.length >= 4 ? scss.active : "")}>
        <div>
          {
            leftList?.map((des) => <DoctorCard key={des.id} {...des} />)
          }
        </div>
        <div>
          {
            rightList?.map((des) => <DoctorCard key={des.id} {...des} />)
          }
        </div>
      </div>
      {diplomas.length > 1 &&
        <div className={scss.diploms}>
          <span onClick={() => setActive(!active)}>
            <img
              className={active ? scss.active : ""}
              src="/images/slider-arrow.svg"
              alt="Стрелка"
            />
            <p>Дипломы и сертификаты</p>
          </span>
          <div className={active ? scss.active : ""}>
            {
              diplomas.map((el) => <div className={scss.diplom} key={el}>
                <img src={el} alt="Диплом" />
              </div>)
            }
          </div>
        </div>
      }
    </div>
  )
}
