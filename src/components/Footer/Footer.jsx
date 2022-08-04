import css from "./Footer.module.scss"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.white_block}></div>
            <div className={`${css.wrapper} container`}>
                <div className={css.other}>
                    <div className={css.link_block}>
                        <div className={css.link}>
                            <Link to="/services">Услуги</Link>
                            <Link to="/doctors">Специалисты</Link>
                            <Link to="/result">Результаты</Link>
                            <Link to="/price">Цены</Link>
                            <Link to="/more">Ещё</Link>
                        </div>
                        <div className={css.link}>
                            <Link to="/about">О клинике</Link>
                            <Link to="/faq">Информация для пациентов</Link>
                            <Link to="/reception">Время приема</Link>
                            <Link to="/comment">Отзывы</Link>
                        </div>
                    </div>
                    <div className={css.footerBottom}>
                        <span>
                            <img src="/images/footer-calendar.svg" alt="calendar" /> ПН - СБ: 8:00 -
                            20:00
                        </span>
                        <a href="tel: + 996 (501) 420 420">
                            <img src="/images/footer-phone.svg" alt="calendar" /> + 996 (501) 420 420
                        </a>
                        <a href="tel: + 996 (555) 142 020">
                            <img src="/images/footer-phone.svg" alt="calendar" />+ 996 (555) 142 020
                        </a>
                    </div>
                </div>
                <div className={css.footerRight}>
                    <div className={css.btn}>
                        <Link to="/"><button className="btn btn-footer">Онлайн консультация</button></Link>
                        <Link to="/"><button className="btn btn-footer">Пройти тест</button></Link>
                    </div>
                    <div className={css.img}>
                        <Link to="/"><img src="/images/logo.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
