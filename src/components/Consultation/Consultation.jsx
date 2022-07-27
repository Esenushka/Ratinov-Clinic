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
    </div>
  );
}

export default Consultaition;
