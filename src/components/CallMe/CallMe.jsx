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
          <div className={css.input_block}>
            <span className={css.title}>
              Оставьте свои контакты и мы вам перезвоним
            </span>
            <div className={css.input}>
              <p>Введите ваше имя</p>
              <input style={{outline:"none"}} type="text" placeholder="Иван Иванович" />
            </div>
            <div className={`${css.input1}`}>
              <p>Номер телефона*</p>
              <PhoneInput
                name="phoneNumber"
                type="text"
                country={"kg"}
                enableAreaCodes={true}
                inputProps={{
                  name: "phone",
                  country: "us",
                  required: false,
                  autoFocus: false,
                }}
                // Set your inline styles here

                containerStyle={{
                  width: "75%",
                  height: "60px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid #e2e2e2",
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
                placeholder="+996 (555) 55-55-55"
                required
              />
            </div>
            <LinkTop to={"/consultation"}>
              <button className="btn btn-big-bg">Заказать звонок</button>
            </LinkTop>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F1%20618332334.png?alt=media&token=2921df2c-d18c-409c-bfd5-bea471bbc03a"
            alt=""
          />
        </div>
      </div>
    </div>
  );
});
