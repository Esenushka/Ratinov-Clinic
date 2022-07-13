import scss from './TreatBlock.module.scss'

export default function TreatBlock() {
  return (
    <div className={scss.wrapper}>
      <div className='container'>
        <h1>Что <span>мы лечим</span></h1>
        <div className={scss.blocks}>
          <div className={scss.block}>
            <img src='/images/treat-1.svg' alt='Неврология-вертебрология' />
            <span className={scss.lower_block}>
              <p>Неврология-вертебрология</p>
              <span>
                <img src='/images/slider-arrow.svg' alt='Стрелка' />
                Узнать подробнее
              </span>
            </span>
          </div>
          <div className={scss.block}>
            <img src='/images/treat-2.svg' alt='Ортопедия-травматология ' />
            <span className={scss.lower_block}>
              <p>Ортопедия-травматология</p>
              <span>
                <img src='/images/slider-arrow.svg' alt='Стрелка' />
                Узнать подробнее
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
