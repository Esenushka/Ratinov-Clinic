import { Link } from 'react-router-dom';
import Logo from '../assets/image/Logo.svg';
import CalendarSvg from '../assets/image/HeaderCalendar.svg';
import PhoneSvg from '../assets/image/HeaderPhone.svg';
import SelectArrow from '../assets/image/SelectArrow.svg';
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
                  <img src={CalendarSvg} alt="calendar" /> ПН - СБ: 8:00 - 20:00
                </span>
                <a href='tel: + 996 (501) 420 420'>
                  <img src={PhoneSvg} alt="calendar" /> + 996 (501) 420 420
                </a>
                <a href='tel: + 996( 555) 142 020'>
                  <img src={PhoneSvg} alt="calendar" />+ 996( 555) 142 020
                </a>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <div className={styles.headerBottomLeft}>
                <img src={Logo} alt="logo" />
                <span>
                  Услуги <img alt="select" src={SelectArrow} />
                </span>
                <Link to="/">Специалисты</Link>
                <Link to="/">Результаты</Link>
                <Link to="/">Цены</Link>
                <span>
                  Ещё <img alt="select" src={SelectArrow} />
                </span>
              </div>
              <div className={styles.headerBottomRight}>
                <button>Онлайн консультация</button>
                <button>Пройти тест</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;