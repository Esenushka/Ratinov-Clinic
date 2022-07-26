import scss from "./TopBlock.module.scss"

export default function TopBlock({ text, bold, reverse, path, secondPath }) {
  return (
    <>
      <div className={scss.wrapper}>
        <div className="container">
          <h1 className={reverse ? scss.reverse : ""}>
            {bold}
            <span>{text}</span>
          </h1>
        </div>
      </div>
      <div className="container">
        <p className={scss.path}>
          Главная /
          {" " + path + " "}
          {secondPath ? (" / " + secondPath) : ""}
        </p>
      </div>
    </>
  )
}
