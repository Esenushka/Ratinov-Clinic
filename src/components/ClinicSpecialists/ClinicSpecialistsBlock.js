import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import styles from "./ClinicSpecialistsBlock.module.scss";

export default memo(function ClinicSpecialistsBlock({ specialists }) {
  return (
    <>
      <h1
        style={{ margin: "70px auto 30px auto" }}
        className={"container " + styles.title}
      >
        Специалисты клиники
        <a
          href="https://www.youtube.com/watch?v=sJH0L6xaxCA"
          rel="noreferrer"
          target="_blank"
        >
          Посмотреть всех <img src="/images/Arrow2.png" alt="arrow" />
        </a>
      </h1>
      <div className={styles.clinicWrapper}>
        <div className={styles.backCard}>
          <div className="container">
            <div className={styles.clinicBlockCard}>
              {specialists.map((clinic) => (
                <div key={clinic.id}>
                  {clinic.notDoctor ? (
                    <>
                      <LinkTop to={"/"}>
                        {clinic.text}
                        <br />
                        <h5 className={styles.hide}>hehe</h5>
                        <div className={styles.line}></div>
                      </LinkTop>
                    </>
                  ) : (
                    <>
                      <LinkTop to={"/doctors?" + clinic.path + "&"}>
                        Врач
                        <br />
                        <span>{clinic.text}</span>
                        <div className={styles.line}></div>
                      </LinkTop>
                    </>
                  )}
                  <p>{clinic.des}</p>
                  <LinkTop
                    className={styles.btn}
                    to={"/doctors?" + clinic.path + "&"}
                  >
                    <button className="btn btn-small">Подробнее</button>
                  </LinkTop>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adapt}>
        <h1>
          Специалисты <br /> клиники
          <a
            href="https://www.youtube.com/watch?v=sJH0L6xaxCA"
            rel="noreferrer"
            target="_blank"
          >
            Посмотреть всех <img src="/images/Arrow2.png" alt="arrow" />
          </a>
        </h1>
        <div className={styles.slider}>
          {specialists.map((clinic) => (
            <div>
              <div key={clinic.id}>
                {clinic.notDoctor ? (
                  <>
                    <LinkTop to={"/"}>
                      {clinic.text}
                      <br />
                      <h5 className={styles.hide}>hehe</h5>
                      <div className={styles.line}></div>
                    </LinkTop>
                  </>
                ) : (
                  <>
                    <LinkTop to={"/doctors?" + clinic.path + "&"}>
                      Врач
                      <br />
                      <span>{clinic.text}</span>
                      <div className={styles.line}></div>
                    </LinkTop>
                  </>
                )}
                <p>{clinic.des}</p>
                <LinkTop
                  className={styles.btn}
                  to={"/doctors?" + clinic.path + "&"}
                >
                  <button className="btn btn-small">Подробнее</button>
                </LinkTop>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
