import { memo, useState } from "react";
import LinkTop from "../../hooks/LinkTop";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ isResult }) => {
  const [isSelect, setSelect] = useState(false);

  return (
    <header className={isResult ? styles.headerResult : ""}>
      <div className="container">
        <div className={styles.headerTop}>
          <span>Пн - Сб: 08:00 - 20:00</span>
          <div className={styles.headerTopRight}>
            <a href="tel: + 996 (501) 420 420">+ 996 (501) 420 420</a>
            <a href="tel: + 996 (555) 142 020">+ 996 (555) 142 020</a>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className="container">
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomLeft}>
            <LinkTop className={styles.logo} to="/">
              <img src="/images/Logo.svg" alt="Логотип" />
            </LinkTop>
            <div className={styles.nav}>
              <div className={styles.select}>
                <span
                  style={{ alignItems: "center" }}
                  onMouseOver={() => setSelect(true)}
                >
                  <p
                    style={{
                      color: "#333333",
                      margin: "0 -7px 0 0",
                      lineHeight: "17px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Услуги
                  </p>
                  <img alt="select" src="/images/slider-arrow.svg" />
                </span>
                {isSelect && (
                  <div onMouseLeave={() => setSelect(false)}>
                    <Link to="/services">Все Услуги</Link>
                    <Link to="/services/spine">Позвоночник</Link>
                    <Link to="/services/joint">Суставы</Link>
                    <Link to="/services/therapeutic">ЛФК</Link>
                    <Link to="/services/physiotherapy">Физиолечение</Link>
                    <Link to="/services/massage">Массаж</Link>
                    <Link to="/services/rehabilitation">
                      Реабилитация Covid-19
                    </Link>
                    <Link to="/services/botulinum">Ботолинотерапия</Link>
                  </div>
                )}
              </div>
              <LinkTop to="/doctors">Специалисты</LinkTop>
              <LinkTop to="/result">Результаты</LinkTop>
              <LinkTop to="/price">Цены</LinkTop>
              <LinkTop to="/comment">Отзывы</LinkTop>
            </div>
          </div>
          <div className={styles.headerBottomRight}>
            <LinkTop className={styles.link} to={"/consultation"}>
              Онлайн консультация
            </LinkTop>
            <a
              href="http://test.ratinovclinic.kg/"
              target="_blanck"
              rel="noreferrer"
              className={styles.link}
            >
              Тест на здоровье позвоночника
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
