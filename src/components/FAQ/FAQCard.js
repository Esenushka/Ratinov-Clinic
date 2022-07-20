import { useState } from "react"
import { Link } from "react-router-dom";
import scss from "./FAQ.module.scss"

export default function FAQCard({ title, buttons, info, type }) {
  const [active, setActive] = useState(false);

  return (
    <div className={scss.block}>
      <span onClick={() => setActive(!active)}>
        <img className={active ? scss.active : ""} src="/images/slider-arrow.svg" alt="Стрелка" />
        <p>{title}</p>
      </span>
      <div className={scss.info_wrapper + " " + (active ? scss.active : "")}>
        {
          type === 1 ? <div className={scss.info + " " + scss.bold}>
            <p>{info[0]}</p>
            <p>{info[1]}</p>
          </div> : type === 1.1 ?
            <div className={scss.info + " " + scss.bold_reverse}>
              <p>{info[0]}</p>
              <p>{info[1]}</p>
            </div> : type === 2 ?
              <div className={scss.info}>
                <p><span>{info[0]}</span> - {info[1]}</p>
                <p>{info[2]}</p>
              </div> : type === 3 ?
                <div className={scss.info + " " + scss.with_link}>
                  {
                    info.map((el) => el.reverse ?
                      <p key={el.id} >
                        {el.text}
                        {" "}
                        <Link to={el.path}>{el.link}</Link>
                      </p>
                      : <p key={el.id} >
                        <Link to={el.path}>{el.link}</Link>
                        {" "}
                        {el.text}
                      </p>)
                  }
                </div> : type === "phone" ?
                  <div className={scss.info + " " + scss.phone}>
                    {
                      info.map((el) => <p key={el.id}>
                        <img src="/images/HeaderPhone.svg" />
                        {el.phone}
                        {el.whatsapp ? " (WhatsApp)" : ""}
                      </p>)
                    }
                  </div> : type === 4 ?
                    <div className={scss.info}>
                      {info.map((el, index) => <p key={index}>{el}</p>)}
                    </div> : type === 5 ?
                      <div className={scss.info}>
                        {
                          info.map((el) => <p key={el.id}>{el.text}<span> {el.bold}</span></p>)
                        }
                      </div> : ""
        }

        {
          buttons.length > 0 ? <div className={scss.btns + " " + (buttons?.length === 1 ? scss.only_one : "")}>
            {
              buttons.map((el, index) => <button key={index} className="btn btn-small">{el}</button>)
            }
          </div> : ""
        }
      </div>
    </div>
  )
}
