import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div>
            <div className={styles.headerTop}>
              <div className={styles.headerTopLeft}>
                <a href="#about">О клинике</a>
                <a href="#faq">Информация для пациентов</a>
                <Link to="/">Обучение</Link>
                <Link to="/comment">Отзывы</Link>
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
                <Link className={styles.logo} to="/">
                  <img src="/images/Logo.svg" alt="Логотип" />
                </Link>
                <div className={styles.nav}>
                  <Link to="/services">Услуги</Link>
                  <Link to="/doctors">Специалисты</Link>
                  <Link to="/result">Результаты</Link>
                  <Link to="/price">Цены</Link>
                  <span>
                    Ещё <img alt="select" src="/images/slider-arrow.svg" />
                  </span>
                </div>
              </div>
              <div className={styles.headerBottomRight}>
                <button className="btn btn-small">Онлайн консультация</button>
                <button className="btn btn-small">Пройти тест</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
