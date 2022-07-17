import { useState } from 'react';
import { resultBlockInfo } from '../../constants/ResultBlock';
import styles from './ResultsBlock.module.scss';
import ResultSlider from './ResultsBlockSlider';

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
              <ResultSlider setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
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
