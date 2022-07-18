import scss from "./FAQ.module.scss"
import FAQCard from "./FAQCard"

export default function FAQ() {

  return (
    <div className={scss.wrapper + " container"}>
      <h1>ВОПРОСЫ</h1>
      <div className={scss.blocks_wrapper}>
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>
    </div>
  )
}
