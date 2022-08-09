import { FAQList } from "../../constants/FAQList"
import scss from "./FAQ.module.scss"
import FAQCard from "./FAQCard"

export default function FAQ() {
  const part1 = FAQList.slice(0, (FAQList.length / 2) + 1)
  const part2 = FAQList.slice((FAQList.length / 2) + 1)
  return (
    <div id="faq" className={scss.wrapper + " container"}>
      <h1>ВОПРОСЫ</h1>
      <div className={scss.blocks_wrapper}>
        <div>
          {
            part1.map((el) => <FAQCard key={el.id} {...el} />)
          }
        </div>
        <div>
          {
            part2.map((el) => <FAQCard key={el.id} {...el} />)
          }
        </div>
      </div>
    </div>
  )
}
