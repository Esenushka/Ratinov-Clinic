import styles from './ResultsBlock.module.scss';

export const ResultsCard = () => {
  return (
    <div className={styles.resultsBottom}>
      <div className={styles.resultSliderLeft}>
        <div className={styles.sliderBg}></div>
        <div className={styles.ResultsCardSliderImg}>
          <p>СНИМОК №1</p>
          <img src="/images/SliderImg.png" alt="ResultsBlockSlider" />
        </div>
      </div>
      <div className={styles.resultsBlockBottomRight}>
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
        <div className={styles.resultsBlockBottomRightPlusText}>
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
  );
};
