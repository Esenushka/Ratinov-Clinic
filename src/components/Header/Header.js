import { memo, useState } from "react";
import { HashLink } from "react-router-hash-link";
import LinkTop from "../../hooks/LinkTop";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({isResult}) => {
  const [isSelect, setSelect] = useState(false);
  
  return (
      <header className={isResult ? styles.headerResult : ''}>
        <div className="container">
          <div>
            <div className={styles.headerTop}>
              <div className={styles.headerTopLeft}>
                <HashLink to="/#about">О клинике</HashLink>
                <HashLink to="/#faq">Информация для пациентов</HashLink>
                <LinkTop to="/">Обучение</LinkTop>
                <LinkTop to="/comment">Отзывы</LinkTop>
              </div>
              <div className={styles.headerTopRight}>
                <span>
                  <img src="/images/HeaderCalendar.svg" alt="Часы" /> ПН - СБ:
                  8:00 - 20:00
                </span>
                <a href="tel: + 996 (501) 420 420">
                  <img src="/images/HeaderPhone.svg" alt="Телефон" /> + 996
                  (501) 420 420
                </a>
                <a href="tel: + 996 (555) 142 020">
                  <img src="/images/HeaderPhone.svg" alt="Телефон" />+ 996 (555)
                  142 020
                </a>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <div className={styles.headerBottomLeft}>
                <LinkTop className={styles.logo} to="/">
                  <img src="/images/Logo.svg" alt="Логотип" />
                </LinkTop>
                <div className={styles.nav}>
                  <div className={styles.select}>
                    <span
                      onMouseOver={() => setSelect(!isSelect)}
                      style={{ alignItems: "center" }}
                    >
                      <p
                        style={{
                          color: "black",
                          margin: "0 -7px 0 0",
                          lineHeight: "20px",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Услуги
                      </p>
                      <img alt="select" src="/images/slider-arrow.svg" />
                    </span>
                    {isSelect && (
                      <div onMouseLeave={() => setSelect(!isSelect)}>
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
                </div>
              </div>
              <div className={styles.headerBottomRight}>
                <LinkTop to={"/consultation"}>
                  <button className="btn btn-small">Онлайн консультация</button>
                </LinkTop>
                <a
                  href="http://test.ratinovclinic.kg/"
                  target="_blanck"
                  rel="noreferrer"
                  className="btn btn-small"
                >
                  Пройти тест
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    
  );
};

export default memo(Header);
