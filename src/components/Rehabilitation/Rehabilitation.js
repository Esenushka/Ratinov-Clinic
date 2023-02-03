import scss from "./Rehabilitation.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

export default memo(function Rehabilitation() {
  return (
    <>
      <div className={scss.main_img}>
        <div className={scss.mainBgImg}>
          <img src="/images/dedushka.png" alt="Задний фон" />
        </div>
        <div className={scss.mainRight}>
          <h1>Постковидный синдром </h1>
          <ul>
            <li>
              Постковидный синдром - это патологическое состояние после
              коронавируса, которое может сопровождаться различной
              симптоматикой.
            </li>
            <li>
              Постковидный синдром может возникнуть вне зависимости от того, в
              какой форме коронавирус протекал у человека: скрытой, легкой,
              средней, тяжелой или критической.
            </li>
          </ul>
        </div>
      </div>
      <div className={scss.wrapper}>
        <div className="container">
          <h1>Протокол</h1>
          <Link className={scss.topLink} to={"#"}>
            Наше лечение постковидного синдрома составлено по стандартным
            протоколам лечения постковидного синдрома в РФ.
          </Link>
        </div>
        <div className={scss.underLine}></div>
        <div className={scss.block}>
          <div className="container">
            <h1>Что входит в лечение?</h1>
            <ul className={scss.first}>
              <li> Лазеротерапия HIL, MLS </li>
              <li> Магнитотерапия SIS </li>
              <li> Массаж двух видов (общий и лимфодренажный) </li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>
        <div className={scss.block}>
          <div className="container">
            <h1>Как проходит лечение?</h1>
            <ul>
              <li>
                Сначала пациент получает все физиотерапевтические процедуры по
                протоколам
              </li>
              <li>Лазеротерапия 2 руки (вены) и легкие со спины.</li>
              <li>
                Магнитотерапия 2 точки по протоколам "восстановление мышц" и
                легкие (диафрагма).
              </li>
              <li>
                Вторым этапом пациент проходит курс массажа двух видов
                (общий+лимфодренажный)
              </li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>
        <div className={scss.block}>
          <div className="container">
            <h1>Какие симптомы мы лечим?</h1>
            <ul>
              <li>затруднение полного вдоха</li>
              <li>низкая сатурация</li>
              <li>дистрофия мышц диафрагмы</li>
              <li>невралгия</li>
              <li>слабость и подавленное состояние</li>
              <li>интоксикация организма после вирусной инфекции</li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>

        <div className={scss.block}>
          <div className="container">
            <h1>О курсе</h1>
            <ul>
              <li>Длительность курса 20 дней по 40 мин в день</li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>
        <div className="container">
          <LinkTop className={scss.lnk} to={"/price"}>Узнать стоимость</LinkTop>
        </div>
        <div className={scss.shadowline}></div>
      </div>
    </>
  );
});
