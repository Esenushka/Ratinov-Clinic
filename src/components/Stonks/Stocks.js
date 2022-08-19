import { memo } from "react"
import { Link } from "react-router-dom"
import scss from "./Stocks.module.scss"
export default memo(function Stocks({ setLoadingImage, stocks }) {

  return (
    <div className={scss.main_wrapper}>
      <div className={scss.bg}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F59150a0051643acc5d2e897713473bbb%201%20(1).png?alt=media&token=2560ba99-d570-4622-bd5b-195740b61c99"
          alt="Задний фон" />
      </div>
      <div className="container">
        <div className={scss.wrapper}>
          <p className={scss.blue_text}>
            Мы собрали все протоколы лечения по
            соответствующим категориям и упаковали
            в пакеты лечения для вашей экономии.
          </p>
          <h1>Как это работает?</h1>
          <p className={scss.moved_blue_text}>
            При единоразовой покупки курса вы
            получаете скидку в 30-35%, что
            позволяет сэкономить ваши деньги.
          </p>
          {
            stocks.map((info) => <div key={info.id} className={scss.block_wrapper}>
              <h1>{info.title}</h1>
              <p>Лечение проводит врач <Link to={"#"}>невролог-вертебролог</Link></p>
              {
                info.list.map((listInfo, index) => <div key={index} className={scss.block}>
                  <h4>{listInfo.title}</h4>
                  <div className={scss.list}>
                    {
                      listInfo.procedure.map((procedure, indexProcedure) => <p key={indexProcedure}>{procedure}</p>)
                    }
                  </div>
                  <h5>Стоимость без скидки {listInfo.without} сомов</h5>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                      <path
                        d="M23.437 27.427L27.2407 13.9687C27.3003 13.758 27.3102 13.5363 27.2696
                  13.3212C27.2291 13.106 27.1393 12.9031 27.0072 12.7285C26.875 12.5539 
                  26.7042 12.4123 26.5082 12.3148C26.3121 12.2174 26.0961 12.1666 25.8772
                  12.1667H17.7448C17.6282 12.1667 17.5131 12.1404 17.4081 12.0897C17.3031
                  12.0391 17.2109 11.9654 17.1384 11.8742C17.0658 11.783 17.0147 11.6765
                  16.989 11.5628C16.9632 11.4491 16.9635 11.3311 16.9897 11.2175L17.3439 
                  9.68469C17.6683 8.27865 17.7724 6.8301 17.6527 5.39219L17.5875 4.6109C17.5177
                  3.77272 17.1531 2.98642 16.5583 2.39169C16.0143 1.84755 15.2764 1.5418 14.507
                  1.54169H14.337C13.8716 1.54169 13.4431 1.79385 13.2178 2.20044L11.3344 5.58981C10.49
                  7.10991 9.23138 8.35898 7.70488 9.19169L2.98808 11.7629C2.76446 11.885 2.57788 12.065
                  2.44799 12.2842C2.3181 12.5033 2.2497 12.7534 2.25 13.0082V27.0417C2.25 27.4174 2.39926
                  27.7777 2.66493 28.0434C2.93061 28.3091 3.29094 28.4584 3.66667 28.4584H22.0741C22.3826
                  28.4583 22.6826 28.3575 22.9286 28.1713C23.1746 27.9852 23.3531 27.7239 23.437 27.427V27.427Z"
                        stroke="#0097DB"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokelejoin="round" />
                    </svg>
                    <p>Стоимость со скидкой {listInfo.with} сомов</p>
                  </span>
                </div>)
              }
            </div>)
          }
        </div>
      </div>
    </div>
  )
})
