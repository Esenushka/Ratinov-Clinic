import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './ClinicSpecialistsBlock.module.scss';

export default memo(function ClinicSpecialistsBlock ({specialists}) {  
  return (
    <div className={styles.clinicWrapper}>
      <div className="container">
        <div>
          <p>
            <b>Специалисты </b>клиники
          </p>
          <Link to={"/consultation"}>
            <button className="btn btn-big-bg">Записаться на приём</button>
          </Link>
          <div className={styles.clinicBlockCard}>
            {specialists.map((clinic) => (
              <div key={clinic.id}>
                {
                  clinic.notDoctor ? <Link to={"/"}>
                    {clinic.text}
                  </Link> : <Link to={"/doctors?" + clinic.path + "&"}>
                    Врач
                    <span>{clinic.text}</span>
                  </Link>
                }
                <p>{clinic.des}</p>
                <Link to={"/doctors?" + clinic.path + "&"}>
                  <button className="btn btn-small">Подробнее</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
})
