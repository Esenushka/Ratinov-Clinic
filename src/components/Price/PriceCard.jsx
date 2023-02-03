import { memo } from "react";
import css from "./PriceCard.module.scss";

export default memo(function PriceCard({ list, group }) {
  return (
    <div className={`${css.block} container`}>
      <div className={css.title}>
        <h1>{group}</h1>
        <h1 style={{marginRight:"20px"}} >Цена,сом</h1>
      </div>
      <div className={css.underLine}></div>
      {list.map((el, index) => (
        <>
          <div key={index} className={css.des}>
            <span>{el.title}</span>
            <span>{el.price} сомов</span>
          </div>
        </>
      ))}
    </div>
  );
});
