import css from './Consultation.module.scss';

export default function About() {
  return (
    <div className={`${css.about} container`}>
      <h1>О НАШЕЙ КЛИНИКЕ</h1>
      <div className={css.about_card}>
        <div className={css.card}>
          <img src="/images/about1.svg" alt="" />
          <span><b>Первая клиника в Центральной Азии</b> по лечению грыж без операции методом резорбции</span>
        </div>
        <div className={css.card}>
          <img src="/images/about2.svg" alt="" />
          <span>Занимаемся лечением пациентов страдающих  различными болевыми синдромами и заболеваниями, связанные с <b>позвоночником и суставами</b></span>
        </div>
        <div className={css.card}>
          <img src="/images/about3.svg" alt="" />
          <span><b>95% пациентов с положительными результатами,</b> которые мы подтверждаем снимками МРТ и отзывами пациентов</span>
        </div>
      </div>
    </div>
  )
}
