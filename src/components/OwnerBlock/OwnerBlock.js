import { memo } from "react";
import { Link } from "react-router-dom";
import scss from "./OwnerBlock.module.scss";

const OwnerBlock = () => {
  return (
    <div className="container">
      <div className={scss.ownerBlock}>
        <div className={scss.leftSide}>
          <h3>Основатель клиники</h3>
          <h1>РАТИНОВ АНДРЕЙ СЕРГЕЕВИЧ</h1>
          <h5>
            Невролог-вертебролог, мануальный терапевт, радиолог,
            иглорефлексотерапевт
          </h5>
          <div>
            <Link to={"/doctor/0Yr4o1rQiuJLO6FX84Yx"}>
              Перейти к странице врача
            </Link>

            <img
              style={{ marginLeft: "10px" }}
              src="/images/nonActiveArrow.svg"
              alt="arrow"
            ></img>
          </div>
          <div className={scss.line}></div>
          <p>
            Сильная боль во время грыжи является у многих людей веской причиной
            оперироваться, но боль редко является показанием к операции (1 из
            1000 случаев). 95% пациентам мы помогаем избавиться от боли и
            уменьшить размеры грыжи в несколько раз.
          </p>
          <div className={scss.line}></div>
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <div className={scss.rightSide}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fratin.png?alt=media&token=2ce7ea3d-f3c6-4999-84a7-4e54cb5e43b2"
            alt="ratin"
          ></img>
        </div>
      </div>
      <div className={scss.lineBt}></div>
    </div>
  );
};

export default memo(OwnerBlock);
