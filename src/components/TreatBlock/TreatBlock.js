import scss from './TreatBlock.module.scss'

export default function TreatBlock() {
  return (
    <div className={scss.wrapper}>
      <div className='container'>
        <h1>Что <span>мы лечим</span></h1>
        <div className={scss.blocks}>
          <div className={scss.block}>
            <img src='https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F59150a0051643acc5d2e897713473bbb-1%201.png?alt=media&token=ab923842-5c70-47e4-b1c1-348843a18c46' alt='Неврология-вертебрология' />
            <span className={scss.lower_block}>
              <p>Неврология-вертебрология</p>
              <span>
                <img src='/images/slider-arrow.svg' alt='Стрелка' />
                Узнать подробнее
              </span>
            </span>
          </div>
          <div className={scss.block}>
            <img src='https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Forthopedics2%201.png?alt=media&token=5172f0b4-909c-4d6d-84a9-2412422c5e66' alt='Ортопедия-травматология ' />
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
