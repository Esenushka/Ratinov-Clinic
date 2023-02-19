import { memo, useState } from "react";
import LinkTop from "../../hooks/LinkTop";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { headerLinks } from "../../constants/socialMedia";
import { socialLinks } from "../../constants/socialMedia";

const Header = ({ isResult, setHeader, isHeader }) => {
  const [isSelect, setSelect] = useState(false);

  return (
    <div className={styles.isHead}>
      <header className={isResult ? styles.headerResult : ""}>
        <div className="container">
          <div className={styles.headerTop}>
            <div className={styles.headerTopRight}>
              <a href="tel: + 996 (501) 420 420">+ 996 (501) 420 420</a>
              <a href="tel: + 996 (555) 142 020">+ 996 (555) 142 020</a>
            </div>
            <span className={styles.social}>
              {headerLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.name} alt="logo"></img>
                </a>
              ))}
            </span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className="container">
          <div className={styles.headerBottom}>
            <div className={styles.headerBottomLeft}>
              <LinkTop className={styles.logo} to="/">
                <img
                  className={styles.loggggo}
                  src="/images/Logo.svg"
                  alt="Логотип"
                />
              </LinkTop>
              <div className={styles.nav}>
                <div className={styles.select}>
                  <span
                    style={{ alignItems: "center" }}
                    onMouseEnter={() => setSelect(true)}
                  >
                    <p>Услуги</p>
                    <img alt="select" src="/images/slider-arrow.svg" />
                  </span>
                  {isSelect && (
                    <div
                      className={styles.links}
                      onMouseLeave={() => setSelect(false)}
                    >
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
                <LinkTop to="/blog">Блог</LinkTop>
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
      <div className={styles.headerAdaptive}>
        <div className={styles.adaptiveTop}>
          <Link to="/">
            <img src="/images/Logo.svg" alt="Логотип" />
          </Link>
          <div
            onClick={() => setHeader(!isHeader)}
            className={isHeader ? styles.burger : styles.close}
          >
            <div className={styles.line}></div>
          </div>
        </div>
        <div
          onClick={() => setHeader(true)}
          className={isHeader ? styles.non : styles.adaptiveBottom}
        >
          <Link to="/services">Все Услуги</Link>
          <LinkTop to="/doctors">Специалисты</LinkTop>
          <LinkTop to="/result">Результаты</LinkTop>
          <LinkTop to="/price">Цены</LinkTop>
          <LinkTop to="/comment">Отзывы</LinkTop>
          <LinkTop to="/blog">Блог</LinkTop>

          <div className={styles.bgAd}>
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
          <div className={styles.socalAd}>
            <div className={styles.innerAd}>
              {socialLinks.map((el) => (
                <a target="_blank" rel="noreferrer" key={el.id} href={el.link}>
                  <img src={el.name} alt={el.link} />
                </a>
              ))}
            </div>
          </div>
          <p
            style={{
              color: "#7d7d7d",
              fontSize: 12,
              background: "white",
              textAlign: "center",
              borderTop: "1px solid #DADADA",
              padding: "10px",
            }}
          >
            Пн - Сб: 08:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
