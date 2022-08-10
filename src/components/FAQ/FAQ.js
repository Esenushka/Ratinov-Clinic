import scss from "./FAQ.module.scss"
import FAQCard from "./FAQCard"

export default function FAQ({faq}) {
  const leftList = faq.slice(0, (faq.length / 2) + 1)
  const rightList = faq.slice((faq.length / 2) + 1)
  return (
    <div id="faq" className={scss.wrapper + " container"}>
      <h1>ВОПРОСЫ</h1>
      <div className={scss.blocks_wrapper}>
        <div>
          {
            leftList.map((el) => <FAQCard key={el.id} {...el} />)
          }
        </div>
        <div>
          {
            rightList.map((el) => <FAQCard key={el.id} {...el} />)
          }
        </div>
      </div>
    </div>
  )
}
