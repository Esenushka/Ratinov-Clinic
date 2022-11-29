import { memo } from "react";
import styles from "./OwnerBlock.module.scss";

const OwnerBlock = () => {
  return (
    <div className="container">
      <div className={styles.ownerBlock}>
        <div className={styles.ownerBlockLeft}>
          <h1>
            Основатель клиники <b>РАТИНОВ АНДРЕЙ СЕРГЕЕВИЧ</b>
          </h1>
          <p>
            невролог-вертебролог, мануальный терапевт, радиолог,
            иглорефлексотерапевт
          </p>
          <div>
            <img src="/images/InvertedCommas.svg" alt="InvertedCommas" />
            <span>
              Сильная боль во время грыжи является у многих людей веской
              причиной оперироваться, но боль редко является показанием к
              операции (1 из 1000 случаев). 95% пациентам мы помогаем избавиться
              от боли и уменьшить размеры грыжи в несколько раз.
            </span>
          </div>
          <div>
            <p>
              С 2018 года является представителем безоперационного лечения грыж
              по методу <b>“моделируемая резорбция”</b>
            </p>
          </div>
          <div className={styles.logoBtn}>
            <div>
              <img src="/images/Logo.svg" alt="Логотип" />
            </div>
            <button className="btn btn-big-bg">Открыть профиль врача</button>
          </div>
        </div>
        <div className={styles.ownerBlockRight}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2FOwnerImg.png?alt=media&token=80b84c48-482b-4441-9b68-50bd2e5ddb02"
            alt="OwnerImg"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(OwnerBlock);
