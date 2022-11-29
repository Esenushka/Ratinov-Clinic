import css from "./CallMe.module.scss";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { memo } from "react";
import LinkTop from "../../hooks/LinkTop";

export default memo(function CallMe() {
  return (
    <div className={css.callme_block}>
      <div className={css.opacity}>
        <div className={`${css.wrapper} container`}>
          <span className={css.title}>
            Хотите, <span className={css.b}>мы вам перезвоним?</span>
          </span>
          <p className={css.des}>
            Как уменьшить грыжу без операции и избавиться от боли в спине?
            Расскажем о лечении и запишем на консультацию к специалисту
          </p>
          <div className={css.input_block}>
            <div className={css.input}>
              <p>Имя</p>
              <input type="text" placeholder="Иван Иванович" />
            </div>
            <div className={`${css.input1}`}>
              <p>Намер вашего телефона*</p>
              <PhoneInput
                name="phoneNumber"
                type="text"
                country={"kg"}
                enableAreaCodes={true}
                inputProps={{
                  name: "phone",
                  country: "us",
                  required: true,
                  autoFocus: false,
                }}
                // Set your inline styles here

                containerStyle={{
                  width: "308px",
                  height: "60px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                }}
                inputStyle={{
                  height: "100%",
                  background: "#fff",
                  border: "none",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                buttonStyle={{
                  background: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "10px",
                }}
                dropdownStyle={{
                  fontSize: "10px",
                }}
                placeholder="(999) 999-999"
                required
              />
            </div>
            <LinkTop to={"/consultation"}>
              <button className="btn btn-big-bg">Записаться на приём</button>
            </LinkTop>
          </div>
          <span className={css.bottom}>
            Нажимая на кнопку "Заказать звонок", я подтверждаю, что ознакомлен и
            согласен с условиями{" "}
            <LinkTop to={"/"}>политики конфиденциальности</LinkTop> и{" "}
            <LinkTop to={"/"}> правилами обработки персональных данных</LinkTop>
          </span>
        </div>
      </div>
    </div>
  );
});
