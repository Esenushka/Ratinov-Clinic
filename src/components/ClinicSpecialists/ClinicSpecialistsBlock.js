import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import styles from "./ClinicSpecialistsBlock.module.scss";

export default memo(function ClinicSpecialistsBlock({ specialists }) {
  return (
    <div className={styles.clinicWrapper}>
      <div className="container">
        <div>
          <p>
            <b>Специалисты </b>клиники
          </p>
          <LinkTop to={"/consultation"}>
            <button className="btn btn-big-bg">Записаться на приём</button>
          </LinkTop>
          <div className={styles.clinicBlockCard}>
            {specialists.map((clinic) => (
              <div key={clinic.id}>
                {clinic.notDoctor ? (
                  <LinkTop to={"/"}>{clinic.text}</LinkTop>
                ) : (
                  <LinkTop to={"/doctors?" + clinic.path + "&"}>
                    Врач
                    <span>{clinic.text}</span>
                  </LinkTop>
                )}
                <p>{clinic.des}</p>
                <LinkTop to={"/doctors?" + clinic.path + "&"}>
                  <button className="btn btn-small">Подробнее</button>
                </LinkTop>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
