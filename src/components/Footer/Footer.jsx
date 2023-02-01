import css from "./Footer.module.scss";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import { HashLink } from "react-router-hash-link";
import { socialLinks } from "../../constants/socialMedia";

const Footer = () => {
  return (
    <>
      <footer className={`${css.footer}`}>
          <img className={css.imggg} src="/images/Vector.svg" alt="" />
          <div className={css.roundBlue}></div>
        <div className={`${css.right} + container`}>
          <div className={css.first}>
            <h1>Tekst</h1>
            <div className={css.line}></div>
            <LinkTop to="/services">Услуги</LinkTop>
            <LinkTop to="/doctors">Специалисты</LinkTop>
            <LinkTop to="/result">Результаты</LinkTop>
            <LinkTop to="/price">Цены</LinkTop>
            <div className={css.line}></div>
            <h5>Бишкек, 7мкр, Сухэ-Батора, 49/6</h5>
            <p>Пн - Сб: 08:00 - 20:00</p>
          </div>
          <div className={css.second}>
            <h1>Tekst</h1>
            <div className={css.line}></div>
            <HashLink to={"/#about"}>О клинике</HashLink>
            <HashLink to={"/#faq"}>Информация для пациентов</HashLink>
            <LinkTop to="/comment">Отзывы</LinkTop>
            <LinkTop to="/reception">Время приема</LinkTop>
            <div className={css.line}></div>
            <a
              rel="noreferrer"
              href="tel: + 996 (501) 420 420"
              className={css.phone}
            >
              +996 (501) 420 - 420
            </a>
            <a
              rel="noreferrer"
              href="tel: + 996 (501) 420 420"
              className={css.phone}
            >
              +996 (501) 420 - 420
            </a>
          </div>
          <div className={css.thirth}>
            <h1>Социальные сети</h1>
            <div className={css.line}></div>
            <div className={css.social}>
              {socialLinks.map((item) => (
                <a key={item.id} href={item.link}>
                  <img src={item.name} alt="" />
                </a>
              ))}
            </div>
            <div className={css.line}></div>
            <LinkTop to="/consultation">
              <button className={css.phone}>Онлайн консультация</button>
            </LinkTop>
            <a
              rel="noreferrer"
              target="_blank"
              href="http://test.ratinovclinic.kg/"
              className={css.phone}
            >
              Пройти тест
            </a>
          </div>
        </div>
      </footer>
      <div className={`${css.bottomHeader} + container`}>
        <p>@2023 Dr. Ratinov's Clinic / все права защищены</p>
        <p>Created by Solid Devs</p>
      </div>
    </>
  );
};

export default memo(Footer);
