import { memo } from "react";
import scss from "./FAQ.module.scss";
import FAQCard from "./FAQCard";

export default memo(function FAQ({ faq }) {
  console.log(faq);
  return (
    <div className={scss.mainOne}>
      <div id="faq" className={scss.wrapper + " container"}>
        <h1>Часто задаваемые вопросы</h1>
        <div className={scss.blocks_wrapper}>
          {faq.map((el, index) => (
            <FAQCard key={el.id} {...el}  index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
});
