import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div>
            <div className={styles.headerTop}>
              <div className={styles.headerTopLeft}>
                <Link to="/">О клинике</Link>
                <Link to="/">Информация для пациентов</Link>
                <Link to="/">Обучение</Link>
                <Link to="/">Отзывы</Link>
              </div>
              <div className={styles.headerTopRight}>
                <span>
                  <img src="/images/HeaderCalendar.svg" alt="calendar" /> ПН - СБ: 8:00 -
                  20:00
                </span>
                <a href="tel: + 996 (501) 420 420">
                  <img src="/images/HeaderPhone.svg" alt="calendar" /> + 996 (501) 420 420
                </a>
                <a href="tel: + 996( 555) 142 020">
                  <img src="/images/HeaderPhone.svg" alt="calendar" />+ 996( 555) 142 020
                </a>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <div className={styles.headerBottomLeft}>
                <Link to="/">
                  <img src="/images/LogoImg.svg" alt="logo" />
                  <img src="/images/LogoText.svg" alt="logo" />
                </Link>
                <Link to="/services">Услуги</Link>
                <Link to="/doctors">Специалисты</Link>
                <Link to="/">Результаты</Link>
                <Link to="/">Цены</Link>
                <span>
                  Ещё <img alt="select" src="/images/SelectArrow.svg" />
                </span>
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
