import css from "./PriceCard.module.scss"

export default function PriceCard() {
    return (
        <div className={css.block}>
            <span onClick={() => setActive(!active)}>
                <img
                    className={active ? scss.active : ""}
                    src="/images/slider-arrow.svg"
                    alt="Стрелка"
                />
                <p>{title}</p>
            </span>
            <div className={css.price + "" + (active ? css.active : "")}>

            </div>
        </div>
    )
}