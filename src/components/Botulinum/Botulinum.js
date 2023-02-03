import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import scss from "./Botulinum.module.scss";
export default memo(function Botulinum() {
  return (
    <>
      <div className={scss.main_img}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fboto.png?alt=media&token=c651e98d-38ba-4666-a0a9-9ce6d462f633"
          alt="Задний фон"
        />
        <div className={scss.mainRight}>
          <h1>Лечение ботексом</h1>
          <ul>
            <li>
              Ботулотоксин - это лекарственный препарат, который блокирует
              нервно-мышечную систему. Он является локальным миорелаксантом, а
              также обладает ярко выраженным обезболивающим эффектом.
            </li>
            <li>
              Ботулинотерапия широко и эффективно применяется в неврологии
            </li>
          </ul>
        </div>
      </div>
      <div className={scss.wrapepr}>
        <div className={scss.block}>
          <div className="container">
            <h1>Что лечит ботокс?</h1>
            <ul>
              <li>
                Спастичность(двигательное нарушение, причиной которого является
                повышенный тонус мышц)
              </li>
              <li>Хроническая боль </li>
              <li>
                Различные головные боли(мигрень, боль напряжения, цервикогенная
                боль)
              </li>
              <li>Лицевые, мышечные боли</li>
              <li>
                Боли в шее, в спине, в плечелопаточном суставе, в верхнем
                грудном отделе, в нижнем отделе спины, миофасциальный болевой
                синдром
              </li>
              <li>Дистонию</li>
              <li>Дисфункцию височно - нижнечелюстного сустава</li>
              <li>Бруксизм</li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>
        <div className={scss.block}>
          <div className="container">
            <h1>Детали</h1>
            <ul>
              <li>
                Ботулотоксин не даёт никакого системного эффекта на организм,
                что позволяет пациентам с плохой переносимостью или
                неэффективностью лечения таблетками избавиться от своей проблемы
                другим, безопасным путём.
              </li>
              <li>ХЛечение проводит врач невролог, Ратинов А.С</li>
              <li>
                Ботулинотерапия вводится один раз в полгода-год, в зависимости
                от индивидуальных особенностей организма пациента.
              </li>
              <li>Стоимость 1 единицы 200 сомов.</li>
              <li>
                Количество единиц назначается индивидуально после очного приёма
                врача.
              </li>
            </ul>
          </div>
        </div>
        <div className={scss.underLine}></div>
        <div className="container">
          <LinkTop to={"/consultation"} className={scss.lnk}>
            Узнать стоимость
          </LinkTop>
        </div>
        <div className={scss.shadowline}></div>
        <div className={scss.bottom}>
          <h1 className="container">
            У вас хроническая мигрень? <br /> Мы разработали курс лечения для
            уменьшения симптомов <br /> и улучшения качества жизни пациента.
          </h1>
          <div className={scss.first}>
            <div className="container">
              <h1>Диагностика </h1>
              <p>
                Врач-невролог проводит первичную диагностику, собирает всю
                картину симптоматики заболевания и жалоб пациента.
              </p>
            </div>
          </div>
          <div className={scss.underLine}></div>
          <div className={scss.second}>
            <div className="container">
              <h1>Лечение</h1>
              <p>
                Врач подбирает необходимое количество единиц для препарата
                ботулотоксина, а также может назначить наиболее эффективный
                медикаментозной комплекс.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
