import { memo, useState } from "react";
import css from "./PriceCard.module.scss"

export default memo(function PriceCard({ list, group }) {
  const [active, setActive] = useState(false);

    return (
        <div className={`${css.block} container`}>
            <span className={css.top} onClick={() => setActive(!active)}>
                <img
                    className={active ? css.active : ""}
                    src="/images/slider-arrow.svg"
                    alt="Стрелка"
                />
                <p>{group}</p>
            </span>
            <div className={css.price + "" + (active ? css.active : "")}>
              {
                list.map((el,index) => (
                  <div key={index} className={css.des} >
                    <span>{el.title}</span>
                    <span>{el.price} сомов</span>
                  </div>
                ))
              }
            </div>
        </div>
    )
})