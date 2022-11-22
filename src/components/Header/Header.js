import { memo } from "react";
import { HashLink } from "react-router-hash-link";
import LinkTop from "../../hooks/LinkTop";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div>
      <header>
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
                  <span style={{alignItems:'center'}}>
                    <LinkTop to="/services">Услуги</LinkTop>
                    <img alt="select" src="/images/slider-arrow.svg" />
                  </span>
                  <LinkTop to="/doctors">Специалисты</LinkTop>
                  <LinkTop to="/result">Результаты</LinkTop>
                  <LinkTop to="/price">Цены</LinkTop>
                </div>
              </div>
              <div className={styles.headerBottomRight}>
                <LinkTop to={"/consultation"}>
                  <button className="btn btn-small">Онлайн консультация</button>
                </LinkTop>
                <a href="http://test.ratinovclinic.kg/" className="btn btn-small">Пройти тест</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);
