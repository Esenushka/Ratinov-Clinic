import { Link } from 'react-router-dom';
import Logo from '../assets/image/Логотип.svg';
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
                <Link to="/">
                  <img src={CalendarSvg} alt="calendar" /> ПН - СБ: 8:00 - 20:00
                </Link>
                <Link to="/">
                  <img src={PhoneSvg} alt="calendar" /> + 996 (501) 420 420
                </Link>
                <Link to="/">
                  <img src={PhoneSvg} alt="calendar" />+ 996( 555) 142 020
                </Link>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <div className={styles.headerBottomLeft}>
                <img src={Logo} alt="logo" />
                <Link to="/">
                  Услуги <img alt="select" src={SelectArrow} />
                </Link>
                <Link to="/">Специалисты</Link>
                <Link to="/">Результаты</Link>
                <Link to="/">Цены</Link>
                <Link to="/">
                  Ещё <img alt="select" src={SelectArrow} />
                </Link>
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
