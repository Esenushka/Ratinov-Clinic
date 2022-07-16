import { useState } from 'react';
import styles from './ResultsBlock.module.scss';
import ResultSlider from './ResultsBlockSlider';

export const resultBlockInfo = [
  {
    id: 1,
    imgSlider: '/images/SliderImg.png',
    imgPlus: '/images/ResultBlockPlus.png',
    before: 'Жалобы до лечения',
    beforeFirstText: 'Онемение руки,боль в плече, приступы головной боли.',
    beforeSecondText: 'Грыжа в 5.8 мм',
    treatmentCourse: 'Назначили 2 курса физиотерапевтического лечения',
    imgMinus: '/images/ResultBlockMinus.png',
    after: 'После лечения:',
    afterFirstText: 'Грыжа уменьшилась в 2 раза ',
    afterSecondText: 'Никакого болевого синдрома, вместо грыжи рубец.',
    result: 'Результат за 4 месяца(с учетомперерывов между курсами, в течение от 1 до 3 месяцев)',
  },
  {
    id: 2,
    imgSlider: '/images/SliderImg.png',
    imgPlus: '/images/ResultBlockPlus.png',
    before: 'Жалобы до лечения',
    beforeFirstText: 'Практически постоянная интенсивная боль в спине и ноге.',
    beforeSecondText: 'Грыжа в 5.8 мм',
    treatmentCourse: 'Назначили 2 курса физиотерапевтического лечения',
    imgMinus: '/images/ResultBlockMinus.png',
    after: 'После лечения:',
    afterFirstText:
      'Ежедневный прием обезболивающих препаратов, которые купировали боль лишь частично',
    afterSecondText: 'Никакого болевого синдрома, вместо грыжи рубец.',
    result: 'Результат за 4 месяца (с учетомперерывов между курсами, в течение от 1 до 3 месяцев)',
  },
  {
    id: 3,
    imgSlider: '/images/SliderImg.png',
    imgPlus: '/images/ResultBlockPlus.png',
    before: 'Жалобы до лечения',
    beforeFirstText: 'Онемение и покалывание регрессировали.',
    beforeSecondText: 'Грыжа в 5.8 мм',
    treatmentCourse: 'Назначили 2 курса физиотерапевтического лечения',
    imgMinus: '/images/ResultBlockMinus.png',
    after: 'После лечения:',
    afterFirstText: 'Ограничение движений в туловище и снижение повседневной активности ',
    afterSecondText: 'Никакого болевого синдрома, вместо грыжи рубец.',
    result: 'Результат за 4 месяца (с учетомперерывов между курсами, в течение от 1 до 3 месяцев)',
  },
];

const ResultsBlock = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className={styles.resultsWrapper}>
      <div className="container">
        <div className={styles.resultsBlock}>
          <div className={styles.resultsTop}>
            <div>
              <h1>
                Наши <b>результаты</b>
              </h1>
              <p>
                Уже более 3000 довольных пациентов избавились от боли в спинеи уменьшили грыжу без
                операции!
              </p>
            </div>
            <button className="btn btn-small">Показать еще</button>
          </div>
          <div className={styles.resultsBottom}>
            <div className={styles.resultSliderLeft}>
              <div className={styles.sliderBg}>
                <p>СНИМОК №1</p>
                <img alt="" src={resultBlockInfo[activeSlide].imgSlider} />
              </div>
              <ResultSlider setActiveSlide={setActiveSlide} />
            </div>
            <div className={styles.resultsBlockBottomRight}>
              <div>
                <div>
                  <img alt="" src={resultBlockInfo[activeSlide].imgPlus} />
                </div>
                <div className={styles.beforeTreat}>
                  <p>{resultBlockInfo[activeSlide].before}</p>
                  <p>{resultBlockInfo[activeSlide].beforeFirstText} </p>
                  <p>{resultBlockInfo[activeSlide].beforeSecondText}</p>
                </div>
              </div>
              <p>{resultBlockInfo[activeSlide].treatmentCourse}</p>
              <div>
                <div>
                  <img alt="" src={resultBlockInfo[activeSlide].imgMinus} />
                </div>
                <div>
                  <p> {resultBlockInfo[activeSlide].after}</p>
                  <p>{resultBlockInfo[activeSlide].afterFirstText} </p>
                  <p>{resultBlockInfo[activeSlide].afterSecondText}</p>
                </div>
              </div>
              <span>{resultBlockInfo[activeSlide].result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsBlock;
