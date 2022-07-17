import { Link } from 'react-router-dom';
import css from './Doctor.module.scss';

const DoctorCard = ({ img, link,  name, des, day_work, price }) => {
  return (
    <div className={css.card}>
      <img src={img} alt="#" />
      <div className={css.wrap_card}>
        <div className={css.name}>
          <Link to={`/${link}`}>{name}</Link>
          <span>{des}</span>
        </div>
        <hr />
        <div className={css.other}>
          <div className={css.other_text}>
            <p>{day_work}</p>
            <h5>Стоимость приёма <br /> {price} сомов</h5>
          </div>
          <Link to={`/${link}`}><button className={`btn-small btn ${css.btn}`}>Подробнее</button></Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
