import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import styles from './ClinicSpecialistsBlock.module.scss';

export const ClinicSpecialistsBlock = () => {
  const [specialists, setSpecialists] = useState([]);
  useEffect(() => {
    db.collection("clinicSpecialists")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const specialistsArr = [];
        snapshot.forEach((doc) => {
          specialistsArr.push({ ...doc.data(), id: doc.id });
        });
        setSpecialists(specialistsArr)
      });
  }, [])
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
};
