import React, { memo } from "react";
import scss from "./TreatBlock.module.scss";

export default memo(function TreatBlock() {
  const Arr = [
    {
      id: 1,
      title: "+ 2000",
      desc: "Пациентам помогаем выздороветь каждый год",
    },
    {
      id: 3,
      title: "4",
      desc: "Года успешной работы в лечении пациентов",
    },
    {
      id: 2,
      title: "+126",
      desc: "Пациентам помогаем выздороветь каждый день",
    },
    {
      id: 4,
      title: "10",
      desc: "Высококвалифицированных врачей разных специальностей",
    },
  ];

  return (
    <>
      <div className={scss.wrapper}>
        <div className="container">
          <div className={scss.cards}>
            {Arr.map((item) => (
              <div key={item.id} className={scss.card}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={scss.adapt}>
        {Arr.map((item) => (
          <div key={item.id} className={scss.card}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
});
