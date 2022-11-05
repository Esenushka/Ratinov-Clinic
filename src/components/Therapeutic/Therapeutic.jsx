import { memo } from "react";
import { Link } from "react-router-dom";
import scss from "./Therapeutic.module.scss";

export default memo(function Therapeutic({ setLoadingImage }) {
  return (
    <div className={scss.therap}>
      <div className={scss.main_bg}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F56890d3d9445bfaa9e863dc98daf01f0.svg?alt=media&token=a00c729f-c780-477c-9d0f-4b3af0a03488"
          alt="Задний фон"
        />
        <div className="container">
          <p>
            <span>Лечебная физкультура (ЛФК)</span> – специальные физические упражнения, которые назначаются в лечебных, профилактических и реабилитационных целях.
          </p>
          <Link to={'/services/therapeutic'}>
            <button className="btn btn-big-bg">Записаться на курс</button>
          </Link>
        </div>
      </div>
      <section className={`${scss.content} container`}>
        <div className={scss.block}>
          <p className={scss.title}>
            <span>Какой эффект</span> оказывают физические упражнения?
          </p>
          <p>Правильно подобранный комплекс физических упражнений способен оказывать лечебное воздействие:</p>
          <div className={scss.list}>
            <ul>
              <li>стимулировать защитные механизмы</li>
              <li>ускорять обменные процессы</li>
              <li>улучшить репаративные процессы</li>
              <li>способствовать быстрому восстановлению нарушенных функций</li>
            </ul>
          </div>
          <p>Для каждого пациента врач подбирает индивидуальную программу ЛФК с учетом всех особенностей состояния больного, которая помогает вернуть утраченные силы и здоровье. </p>
        </div>
        <div className={scss.block}>
          <p className={scss.title}>
            Чем может <span>помочь ЛФК?</span>
          </p>
          <span>Для каждой категории заболеваний разработаны отдельные занятия лечебной физической культурой. </span>
          <div className={scss.list}>
            <p>ЛФК поможет восстановить функции опорно-двигательного аппарата, нормализовать дыхание или стабилизировать сердечную деятельность, а также:</p>
            <ul>
              <li>уменьшить болезненные ощющения</li>
              <li>укрепить суставы</li>
              <li>улучшить мышечный тонус</li>
              <li>ускорить рост тканей после травм</li>
              <li>активизировать циркуляцию крови, что будет обязательно способствовать быстрому очищению тканей от токсинов и прочих продуктов распада</li>
              <li>ускоряет процессы, протекающие в коре голового мозга</li>
              <li>улучшает обмен веществ</li>
              <li>корректирует основные функции организма (кровообращение, дыхание)</li>
              <li>положительно сказывается на эмоциональном состоянии человека</li>
            </ul>
          </div>
          <p>После занятий пациент чувствует себя бодрым, его меньше беспокоят боли и другие симптомы заболевания.</p>
          <Link to={'/services/therapeutic'}>
            <button className="btn btn-big-bg">Записаться на курс</button>
          </Link>
        </div>
        <div className={scss.priceList}>
          <div className={scss.leftPriceList}>
            <h1 className={scss.title}>ЗАНЯТИЯ <h2>В ГРУППЕ</h2></h1>
            <div>
              <p>
                по 3 раза в неделю месяц - <h2> 3000 сомов </h2>
              </p>
              <p>
                по 6 раз в неделю месяц - <h2> 5000 сомов</h2>
              </p>
            </div>
            <div>
              <p>
                Пробное занятие - <h2> 500 сомов</h2>
              </p>
              <p>
                Индивидуальное - <h2> 1000 сомов</h2>
              </p>
            </div>
          </div>
          <div className={scss.rightPriceList}>
            <h1 className={scss.title}><h2>ИНДИВИДУАЛЬНЫЕ</h2>ЗАНЯТИЯ</h1>
            <div>
              <p>
                по 3 раза в неделю месяц - <h2> 6000 сомов</h2>
              </p>
              <p>
                по 6 раз в неделю месяц - <h2> 10 000 сомов</h2>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})