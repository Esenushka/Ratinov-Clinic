import css from './Doctor.module.scss';

const DoctorCard = ({ img, name, des, day_work, price }) => {
  return (
    <div className={css.card}>
      <img src={img} alt="#" />
      <div>
        <div className={css.name}>
          <p>{name}</p>
          <p>{des}</p>
        </div>
        <hr />
        <div className={css.other}>
          <>
            <p>{day_work}</p>
            <p>Стоимость приёма <br /> {price} сомов</p>
          </>
          <button className='btn'></button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
