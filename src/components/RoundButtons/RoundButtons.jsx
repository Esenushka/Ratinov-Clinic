import css from "./roundButtons.module.scss";

export default function RoundButtons() {
  return (
    <div className={css.main}>
      <div className={css.left}>
        <a href="tel: + 996 (555) 142 020" className={css.img}>
        </a>
      </div>
      <div className={css.right}>
        <a href="https://wa.me/996555142020" className={css.img}>
        </a>
      </div>
    </div>
  )
}
