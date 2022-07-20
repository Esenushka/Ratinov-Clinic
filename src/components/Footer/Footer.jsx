import css from "./Footer.module.scss"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={`${css.wrapper} container`}>
                <div className={css.other}>
                    <div className={css.link_block}>
                        <div className={css.link}>
                            <Link to="/">Услуги</Link>
                            <Link to="/">Специалисты</Link>
                            <Link to="/">Результаты</Link>
                            <Link to="/">Цены</Link>
                            <Link to="/">Ещё</Link>
                        </div>
                        <div className={css.link}>
                            <Link to="/">О клинике</Link>
                            <Link to="/">Информация для пациентов</Link>
                            <Link to="/">Время приема</Link>
                            <Link to="/">Отзывы</Link>
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
                <div className={css.btn}>
                    <button className="btn btn-footer">Онлайн консультация</button>
                    <button className="btn btn-footer">Пройти тест</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
