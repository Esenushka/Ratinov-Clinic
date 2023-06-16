import scss from "./Doctor.module.scss";
import React from "react";

export default function DoctorCard({ title, des }) {
  const [isClick, setClick] = React.useState(false);
  return (
    <>
      <div className={scss.block}>
        <div className="container">
          <p>{title}</p>
          <div className={scss.active}>
            <ul>
              {des.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={scss.blockCard}>
        <div className="container">
          <p onClick={() => setClick(!isClick)}>{title}</p>
          {isClick && (
            <div className={scss.active}>
              <ul>
                {des.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
