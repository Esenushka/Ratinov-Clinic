import scss from "./Preloader.module.scss"
export default function Preloader() {
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <svg className={scss.loader} viewBox="0 0 340 340">
          <circle className={scss.circle} cx="170" cy="170" r="185" stroke="#0097DB" />
          <circle className={scss.circle} cx="170" cy="170" r="160" stroke="#363A40" />
          <circle className={scss.circle} cx="170" cy="170" r="135" stroke="#3344BB" />
        </svg>
        <img src="/images/Logo.svg" className={scss.img} alt="Клиника Доктора Ратинова" />
      </div>
    </div>
  )
}
