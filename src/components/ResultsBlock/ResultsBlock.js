import styles from './ResultsBlock.module.scss';
import ResultSlider from './ResultsBlockSlider';

const ResultsBlock = () => {
  return (
    <div className={styles.resultsWrapper}>
      <div className="container">
        <div className={styles.resultsBlock}>
          <div className={styles.resultsLeft}>
            <h1>
              Наши <b>результаты</b>
            </h1>
            <p>
              Уже более 3000 довольных пациентов избавились от боли в спинеи уменьшили грыжу без
              операции!
            </p>
            <div className={styles.sliderBg}></div>
            <ResultSlider />
          </div>
          <div className={styles.resultsRight}>
            <button className="btn btn-small">Показать еще</button>
            <div>
              <div>
                <img alt="" src="/images/ResultBlockPlus.png" />
              </div>
              <div className={styles.beforeTreat}>
                <p>Жалобы до лечения:</p>
                <p>Онемение руки,боль в плече, приступы головной боли. </p>
                <p>Грыжа в 5.8 мм</p>
              </div>
            </div>
            <p>Назначили 2 курса физиотерапевтического лечения</p>
            <div>
              <div>
                <img alt="" src="/images/ResultBlockMinus.png" />
              </div>
              <div>
                <p> После лечения:</p>
                <p>Грыжа уменьшилась в 2 раза </p>
                <p>Никакого болевого синдрома, вместо грыжи рубец.</p>
              </div>
            </div>
            <span>
              Результат за 4 месяца<br></br>
              (с учетомперерывов между курсами, в течение от 1 до 3 месяцев)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsBlock;
