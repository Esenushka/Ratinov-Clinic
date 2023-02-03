import { memo } from "react";
import scss from "./Massage.module.scss";

export default memo(function Massage({ massage }) {
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <h1>Массаж</h1>
        {massage.map((info) => (
          <div key={info.id} className={scss.blocks_wrapper}>
            <h1>{info.name}</h1>
            {info.list.map((text, index) => (
              <div key={index} className={scss.block}>
                <p>{text.title}</p>
                <ul>
                  <li>{text.text}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
