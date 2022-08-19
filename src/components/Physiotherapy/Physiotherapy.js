import { memo } from "react"
import scss from "./Physiotherapy.module.scss"

export default memo(function Physiotherapy({ setLoadingImage, physiotherapy }) {
  return (
    <div className={"container " + scss.wrapper}>
      <div className={scss.blocks_wrapper}>
        {
          physiotherapy.map((info) => <div key={info.id} className={scss.block}>
            <h1>{info.title}</h1>
            <div className={scss.top}>
              {info.duration ? <p>Длительность процедуры: {info.duration} минут</p> : ""}
              {info.to || info.from ? <p>Курс лечения: {info.from ? "от " + info.from : ""} {info.to ? "до " + info.to : ""} процедур</p> : ""}
            </div>
            {
              info.top.map((top) => <div key={info.id} className={scss.info}>
                <div className={scss.left}>
                  <h4>{top.device}</h4>
                  <img
                    onLoad={() => setLoadingImage(false)}
                    src={top.img}
                    alt={top.device}
                  />
                </div>
                <div className={scss.right}>
                  {
                    top.blue_text ? <div className={scss.blue_text}>
                      {
                        top.blue_text.map((text) => <p>{text}</p>)
                      }
                    </div> : ""
                  }
                  {
                    top.range ? <div className={scss.range}>
                      <h4>Область применения</h4>
                      {
                        top.range.map((text) => <p>{text}</p>)
                      }
                    </div> : ""
                  }
                  {
                    top.benefits ? <div className={scss.benefits}>
                      <h4>Преимущества</h4>
                      {
                        top.benefits.map((text) => <p>{text}</p>)
                      }
                    </div> : ""
                  }
                  {
                    top.show ? <div className={scss.show}>
                      <h4>Показания к применению</h4>
                      {
                        top.show.map((text) => text.list ?
                          <ul>{text.list.map((list) => <li>{list}</li>)}</ul> :
                          <p className={text.list !== [] ? scss.next : ""}>{text}</p>)
                      }
                    </div> : ""
                  }
                </div>
              </div>)
            }
          </div>)
        }

      </div>
    </div>
  )
})
