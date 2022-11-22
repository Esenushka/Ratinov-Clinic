import scss from "./Rehabilitation.module.scss"
import { Link } from "react-router-dom"
import { memo } from "react"
import LinkTop from "../../hooks/LinkTop"

export default memo(function Rehabilitation({setLoadingImage}) {
  return (
    <>
      <div className={scss.main_img}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="/images/dedushka.png"
          alt="Задний фон"
        />
        <div className="container">
          <p>
            <span>Постковидный синдром - </span>
            это патологическое состояние после коронавируса,
            которое может сопровождаться различной симптоматикой.
          </p>
          <p>
            Постковидный синдром может возникнуть вне зависимости от того,
            в какой форме коронавирус протекал у человека:
            <span> скрытой, легкой, средней, тяжелой или критической.</span>
          </p>
        </div>
      </div>
      <div className={"container " + scss.wrapper}>
        <Link className={scss.topLink} to={"#"}>
          Наше лечение постковидного синдрома составлено
          по стандартным протоколам лечения постковидного синдрома в РФ.
        </Link>
        <div className={scss.block}>
          <h1>
            <span>Что входит </span>
            в лечение?
          </h1>
          <p>
            <span> Лазеротерапия HIL, MLS </span>
            +
            <span> Магнитотерапия SIS </span>
            +
            <span> Массаж двух видов (общий и лимфодренажный) </span>
          </p>
        </div>
        <div className={scss.block}>
          <h1>
            <span>как проходит </span>
            лечение?
          </h1>
          <div>
            <b>1. Физиотерапия</b>
            <p>
              Сначала пациент получает
              <span> все физиотерапевтические процедуры </span>
              по протоколам Лазеротерапия 2 руки (вены) и легкие со спины.

            </p>
            <p>
              <span>Магнитотерапия</span>
              2 точки по протоколам "восстановление мышц" и легкие (диафрагма).
            </p>
          </div>
          <div>
            <b>2. Массаж</b>
            <p>
              Вторым этапом пациент проходит курс
              <span> массажа двух видов (общий+лимфодренажный)</span>
            </p>
          </div>
        </div>
        <div className={scss.block}>
          <h1>
            <span>Какие симптомы </span>
            мы лечим?
          </h1>
          <ul>
            <li>затруднение полного вдоха</li>
            <li>низкая сатурация</li>
            <li>дистрофия мышц диафрагмы</li>
            <li>невралгия</li>
            <li>слабость и подавленное состояние</li>
            <li>интоксикация организма после вирусной инфекции</li>
          </ul>
        </div>
        <h3>Длительность курса 20 дней</h3>
        <LinkTop to={"/price"}>
          <button className="btn btn-big-bg">Узнать стоимость</button>
        </LinkTop>
      </div>
    </>
  )
})
