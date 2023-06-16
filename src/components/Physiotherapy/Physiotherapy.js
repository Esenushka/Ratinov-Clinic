import { memo } from "react";
import scss from "./Physiotherapy.module.scss";

export default memo(function Physiotherapy({ setLoadingImage, physiotherapy }) {
  return (
    <div className={"container " + scss.wrapper}>
      <div className={scss.blocks_wrapper}>
        {physiotherapy.map((info) => (
          <>
            <div key={info.id} className={scss.block}>
              <h1>{info.title}</h1>
              <ul className={scss.top}>
                {info.duration === "20" ? (
                  <p>Длительность процедуры: {info.duration} минут</p>
                ) : (
                  <li>Длительность процедуры: {info.duration} минут</li>
                )}
                {info.to === "12" ? (
                  <p>
                    Курс лечения: {info.from ? "от " + info.from : ""}{" "}
                    {info.to ? "до " + info.to : ""} процедур
                  </p>
                ) : (
                  <li>
                    Курс лечения: {info.from ? "от " + info.from : ""}{" "}
                    {info.to ? "до " + info.to : ""} процедур
                  </li>
                )}
              </ul>
              {info.top.map((top) => (
                <div key={info.id} className={scss.info}>
                  <div className={info.color ? scss.leftL : scss.left}>
                    <img
                      onLoad={() => setLoadingImage(false)}
                      src={top.img}
                      alt={top.device}
                    />
                  </div>
                  <div className={scss.right}>
                    {top.blue_text ? (
                      <ul className={scss.blue_text}>
                        <h4>{top.device}</h4>
                        {top.blue_text.map((text) => (
                          <li>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {top.range ? (
                      <ul className={scss.range}>
                        <h4>Область применения</h4>
                        {top.range.map((text) => (
                          <li>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {top.benefits ? (
                      <ul className={scss.benefits}>
                        <h4>Преимущества</h4>
                        {top.benefits.map((text) => (
                          <li>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {top.show ? (
                      <ul className={scss.show}>
                        <h4>Показания к применению</h4>
                        {top.show.map((text) =>
                          text.list ? (
                            <>
                              {text.list.map((list) => (
                                <li>{list}</li>
                              ))}
                            </>
                          ) : (
                            <li className={text.list !== [] ? scss.next : ""}>
                              {text}
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
              <div
                className={
                  info.id === "GBjYkjWxH21VFQAWSGtl" ? "" : scss.underLine
                }
              ></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
});
