import styles from './OwnerBlock.module.scss';

const OwnerBlock = () => {
  return (
    <div className="container">
      <div className={styles.ownerBlock}>
        <div className={styles.ownerBlockLeft}>
          <h1>
            Основатель клиники <b>РАТИНОВ АНДРЕЙ СЕРГЕЕВИЧ</b>
          </h1>
          <p>невролог-вертебролог, мануальный терапевт, радиолог, иглорефлексотерапевт</p>
          <div>
            <img src="/images/InvertedCommas.svg" alt="InvertedCommas" />
            <span>
              Сильная боль во время грыжи является у многих людей веской причиной оперироваться, но
              боль редко является показанием к операции (1 из 1000 случаев). 95% пациентам мы
              помогаем избавиться от боли и уменьшить размеры грыжи в несколько раз.
            </span>
          </div>
          <div>
            <p>
              С 2018 года является представителем безоперационного лечения грыж по методу{' '}
              <b>“моделируемая резорбция”</b>
            </p>
          </div>
          <div className={styles.logoBtn}>
            <div>
              <img src="/images/LogoImg.svg" alt="logoImg" />
              <img src="/images/LogoText.svg" alt="logoText" />
            </div>
            <button className="btn btn-big-bg">Открыть профиль врача</button>
          </div>
        </div>
        <div className={styles.ownerBlockRight}>
        <img src="/images/OwnerImg.png" alt="OwnerImg" />
        </div>
      </div>
    </div>
  );
};

export default OwnerBlock;
