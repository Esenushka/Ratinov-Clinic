import { Link } from 'react-router-dom';
import { clinicSpecialistsInfo } from '../../constants/ClinicSpecialistsInfo';
import styles from './ClinicSpecialistsBlock.module.scss';

export const ClinicSpecialistsBlock = () => {
  return (
    <div className={styles.clinicWrapper}>
      <div className="container">
        <div>
          <p>
            <b>Специалисты </b>клиники
          </p>
          <button className="btn btn-big-bg">Записаться на приём</button>
          <div className={styles.clinicBlockCard}>
            {clinicSpecialistsInfo.map((clinic) => (
              <div key={clinic.id}>
                <Link to="/">{clinic.text}</Link>
                <p>{clinic.description}</p>
                <button className="btn btn-small">Подробнее</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
