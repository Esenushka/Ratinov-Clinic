import { memo } from 'react';
import css from './Consultation.module.scss';

export default memo(function About({about,setLoadingImage}) {
  return (
    <div id={"about"} className={`${css.about} container`}>
      <h1>О НАШЕЙ КЛИНИКЕ</h1>
      <div className={css.about_card}>
        {
          about.map((info) => <div className={css.card} key={info.id}>
            <img onLoad={() => setLoadingImage(false)} src={info.img} alt={"Картинка о клиники"} />
            {
              info.reverse ?
                <div>
                  <span>{info.text}</span>
                  {" "}
                  <b>{info.bold}</b>
                </div> : <div>
                  <b>{info.bold}</b>
                  {" "}
                  <span>{info.text}</span>
                </div>
            }
          </div>)
        }
      </div>
    </div>
  )
})
