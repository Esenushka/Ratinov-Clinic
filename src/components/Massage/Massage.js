import { memo } from "react"
import scss from "./Massage.module.scss"

export default memo(function Massage({ setLoadingImage, massage }) {

  return (
    <div className={scss.wrapper}>
      <div className={scss.bg}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fmassage-bg.png?alt=media&token=c780873e-c9f2-4c15-be66-98f592501da3"
          alt="Задний фон массаж"
        />
      </div>
      <div className="container">
        {
          massage.map((info) => <div key={info.id} className={scss.blocks_wrapper}>
            <h1>{info.name}</h1>
            {
              info.list.map((text, index) => <div key={index} className={scss.block}>
                <p>{text.title}</p>
                <p>{text.text}</p>
              </div>)
            }
          </div>)
        }
      </div>
    </div>
  )
})
