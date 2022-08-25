import css from "./Footer.module.scss"
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.white_block}></div>
            <div className={`${css.wrapper} container`}>
                <div className={css.other}>
                    <div className={css.link_block}>
                        <div className={css.link}>
                            <LinkTop to="/services">Услуги</LinkTop>
                            <LinkTop to="/doctors">Специалисты</LinkTop>
                            <LinkTop to="/result">Результаты</LinkTop>
                            <LinkTop to="/price">Цены</LinkTop>
                            <LinkTop to="/more">Ещё</LinkTop>
                        </div>
                        <div className={css.link}>
                            <HashLink to={"/#about"}>О клинике</HashLink>
                            <HashLink to={"/#faq"}>Информация для пациентов</HashLink>
                            <LinkTop to="/reception">Время приема</LinkTop>
                            <LinkTop to="/comment">Отзывы</LinkTop>
                        </div>
                    </div>
                    <div className={css.footerBottom}>
                        <span>
                            <img src="/images/HeaderCalendar.svg" alt="Часы" /> ПН - СБ: 8:00 -
                            20:00
                        </span>
                        <a href="tel: + 996 (501) 420 420">
                            <img src="/images/HeaderPhone.svg" alt="Телефон" /> + 996 (501) 420 420
                        </a>
                        <a href="tel: + 996 (555) 142 020">
                            <img src="/images/HeaderPhone.svg" alt="Телефон" />+ 996 (555) 142 020
                        </a>
                    </div>
                </div>
                <div className={css.footerRight}>
                    <div className={css.btn}>
                        <LinkTop to="/consultation"><button className="btn btn-footer">Онлайн консультация</button></LinkTop>
                        <LinkTop to="/"><button className="btn btn-footer">Пройти тест</button></LinkTop>
                    </div>
                    <div className={css.img}>
                        <LinkTop to="/"><img src="/images/logo.svg" alt="Логотип" /></LinkTop>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Footer);
