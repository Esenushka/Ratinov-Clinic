import styles from './ResultsBlock.module.scss';
import ResultSlider from './ResultsBlockSlider';

const ResultsBlock = () => {
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
          <ResultSlider/>
        </div>
      </div>
    </div>
  );
};

export default ResultsBlock;
