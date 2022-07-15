import css from './Consultation.module.scss';

const Consultaition = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.consultation}>
        <div className={`${css.wrap} container`}>
          <div className={css.consul_des}>
            <span><span className={css.b}>Получить</span> онлайн-консультацию</span>
            <p>Предварительная дистанционная консультация из которой вы узнаете о прогнозах вашего лечения в нашей клинике</p>
          </div>
          <button className='btn-big-bg btn'>Получить консультацию</button>
        </div>
      </div>
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

    </div>
  );
}

export default Consultaition;
