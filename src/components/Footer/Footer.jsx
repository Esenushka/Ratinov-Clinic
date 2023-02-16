import css from "./Footer.module.scss";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import { HashLink } from "react-router-hash-link";
import { socialLinks } from "../../constants/socialMedia";

const Footer = () => {
  return (
    <>
      <div className={css.logo}>
        <img src="/images/logOnBlue.svg" alt="" />
      </div>
      <footer className={`${css.footer}`}>
        <img className={css.imggg} src="/images/Vector.svg" alt="" />
        <div className={css.roundBlue}></div>
        <div className={`${css.right} + container`}>
          <div className={css.first}>
            <div className={css.line}></div>
            <LinkTop to="/services">Услуги</LinkTop>
            <LinkTop to="/doctors">Специалисты</LinkTop>
            <LinkTop to="/result">Результаты</LinkTop>
            <LinkTop to="/price">Цены</LinkTop>
            <HashLink to={"/#about"}>О клинике</HashLink>
            <HashLink to={"/#faq"}>Информация для пациентов</HashLink>
            <LinkTop to="/comment">Отзывы</LinkTop>
            <LinkTop to="/reception">Время приема</LinkTop>
            <div className={css.line}></div>
          </div>
          <div className={css.second}>
            <div className={css.line}></div>
            <h5>Бишкек, 7мкр, Сухэ-Батора, 49/6</h5>
            <p>Пн - Сб: 08:00 - 20:00</p>
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
            <a
              href="https://2gis.kg/bishkek/firm/70000001046561968?m=74.61899%2C42.825056%2F16"
              rel="noreferrer"
              alt="2gis"
              className={css.phone}
            >
              2Гис
            </a>
            <a
              style={{ color: "#0097db" }}
              href="https://www.instagram.com/ratinovclinic.kg/?igshid=NDc0ODY0MjQ%3D"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <div className={css.line}></div>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.297272874011!2d74.61727121579307!3d42.82433397915845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb74f343358db%3A0x4bebb2ce7b1bf427!2z0JrQu9C40L3QuNC60LAg0JTQvtC60YLQvtGA0LAg0KDQsNGC0LjQvdC-0LLQsA!5e0!3m2!1sru!2skg!4v1675686882603!5m2!1sru!2skg"
            className={css.map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="myFrame"
          ></iframe>
        </div>
      </footer>
      <div className={css.adapt}>
        <div className={css.links}>
          <LinkTop to="/services">Услуги</LinkTop>
          <LinkTop to="/doctors">Специалисты</LinkTop>
          <LinkTop to="/result">Результаты</LinkTop>
          <LinkTop to="/price">Цены</LinkTop>
          <HashLink to={"/#about"}>О клинике</HashLink>
          <HashLink to={"/#faq"}>Для пациентов</HashLink>
          <LinkTop to="/comment">Отзывы</LinkTop>
          <LinkTop to="/reception">Время приема</LinkTop>
        </div>
        <div className={css.line}></div>

        <div className={css.addres}>
          <h5>Адресc:</h5>
          <p>Бишкек, 7мкр, Сухэ-Батора, 49/6</p>
          <a
            style={{ color: "#0097db" }}
            href="https://2gis.kg/bishkek/firm/70000001046561968?m=74.619256%2C42.824923%2F19.42"
            target="_blank"
            rel="noreferrer"
          >
            2Gis
          </a>
          <br />
          <a
            style={{ color: "#0097db" }}
            href="https://www.instagram.com/ratinovclinic.kg/?igshid=NDc0ODY0MjQ%3D"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className={css.line}></div>

        <div className={css.workTime}>
          <h5>График работы:</h5>
          <p>Пн - Сб: 08:00 - 20:00</p>
        </div>
        <div className={css.line}></div>
      </div>
      <div className={`${css.bottomHeader} + container`}>
        <p>@2023 Dr. Ratinov's Clinic / все права защищены</p>
        <p>Created by Solid Devs</p>
      </div>
      <div className={css.buttomAd}>
        <p>@2023 Dr. Ratinov's Clinic / все права защищены</p>
      </div>
    </>
  );
};

export default memo(Footer);
