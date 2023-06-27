import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import scss from "./ConsultationPage.module.scss";
import emailjs from "@emailjs/browser";
import { storageRef } from "../../config/firebase";

export default function ConsultationBlockPage({ setLoadingImage }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState(1);
  const [describe, setDescribe] = useState("");
  const [continues, setContinues] = useState("в течение месяца");
  const [blockade, setBlocade] = useState("Да");
  const [fileData, setFileData] = useState("");


  const getUrl = async (name) =>
    await storageRef
      .ref()
      .child("mrt/" + name)
      .getDownloadURL()
      .then((url) => {
        return url;
      });
  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phone: phone,
      date: date,
      range: range,
      describe: describe,
      continue: continues,
      blockade: blockade,
    };
    storageRef
      .ref("mrt/" + fileData.name)
      .put(fileData)
      .then(() => {
        getUrl(fileData.name).then((url) => {
          emailjs
            .send(
              "service_c7n4zs6",
              "template_vne5hgo",
              { ...data, file: url },
              "bayX5lJh7w2M_Okjm"
            )
            .then(
              () => {
                setName("");
                setPhone("");
                setDate("");
                setRange(1);
                setDescribe("");
                setFileData("");
                e.target.reset();
              },
              (error) => {
                alert(error.text);
              }
            );
        });
      });
  };

  const handleChange = (target) => {
    if (target.files.length) {
      const reader = new FileReader();
      setFileData(target.files[0]);
      reader.readAsDataURL(target.files[0]);
    }
  };
  const clearFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFileData("");
  };
  return (
    <div className={scss.main_wrapper}>
      <div className={scss.top}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F56890d3d9445bfaa9e863dc98daf01f0.png?alt=media&token=0423516e-7a07-4dc9-9fa3-cb1154bc24cb"
          alt="Задний фон"
        />

        <h1>
          Предварительная <br /> дистанционная консультация
          <ul>
            <li>
              По МРТ позвоночника в нашей клинике предоставляется иностранным/{" "}
              <br /> иногородним пациентам, которым далеко и трудно добраться до
              нашей <br /> клиники.
            </li>
            <li>
              На онлайн консультации Вы получите заключение о возможности <br />
              «Резорбции Вашей Грыжи», о состоянии вашего позвоночника <br /> и
              потенциальной эффективности нашего лечения.
            </li>
            <li>
              Онлайн консультация проводится главврачом клиники <br /> Ратиновым
              Андреем Сергеевичем.
            </li>
            <li>Стоимость консультации 1000 сомов</li>
          </ul>
        </h1>
      </div>
      <div className={scss.wrapper}>
        <div className="container ">
          <h1>Требования к МРТ</h1>
          <ul>
            <li>
              МРТ исследование должно быть не старше 3-х месяцев, чтобы мы
              смогли объективно оценить изменения на сегодняшний день.
            </li>
            <li>
              МРТ обязательно в электронном формате. Не подойдут: фотографии
              снимков, скриншоты с компьютера или телефона.
            </li>
          </ul>
        </div>
        <div className={scss.line}></div>
        <div className="container ">
          <h1>Что делать, если нет МРТ в электронной версии?</h1>
          <ul>
            <li>
              Обратитесь в тот диагностический центр, в котором проходили
              исследование, и запросите у них запись МРТ в электронном виде на
              диске или флеш-карте.
            </li>
          </ul>
        </div>
        <div
          style={{
            background: "#e4f6ff",
            boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          <form onSubmit={sendEmail} className={scss.form}>
            <h1 className="container">
              Чтобы получить консультацию заполните форму ниже:
            </h1>
            <label className="container">
              <p>Введите ваше имя</p>
              <input
                value={name}
                onChange={({ target }) => setName(target.value)}
                name="name"
                type={"text"}
                placeholder={"Иванов Иван"}
                required
              />
            </label>
            <label className="container">
              <p>Дата рождения</p>
              <input    
                vlaue={date}
                onChange={({ target }) => setDate(target.value)}
                name="date"
                type={"date"}
                placeholder={"10.05.2022"}
              />
            </label>
            <label className="container">
              <p>Номер телефона</p>
              <PhoneInput
                value={phone}
                onChange={(value) => setPhone(value)}
                name="tel"
                type="text"
                country={"kg"}
                enableAreaCodes={true}
                inputProps={{
                  name: "phone",
                  country: "us",
                  required: true,
                  autoFocus: false,
                }}
                containerStyle={{
                  marginTop: "10px",
                  width: "363px",
                  padding: "0px 20px",
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
                  width: "363px",
                  marginLeft: "-20px",
                  borderRadius: "7px",
                  paddingLeft: "66px",
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
                
              />
            </label>
            <div className={scss.line}></div>
            <label className="container">
              <div className={scss.block}>
                <h1>Когда возобновились или начались боли?</h1>
                <div>
                  <input
                    onChange={() => setContinues("в течение месяца")}
                    defaultChecked
                    name="continues"
                    type={"radio"}
                  />
                  <p>в течение месяца</p>
                </div>
                <div>
                  <input
                    onChange={() => setContinues("в течение 3х месяцев")}
                    name="continues"
                    type={"radio"}
                  />
                  <p>в течение 3х месяцев</p>
                </div>
                <div>
                  <input
                    onChange={() => setContinues("полгода")}
                    name="continues"
                    type={"radio"}
                  />
                  <p>полгода</p>
                </div>
                <div>
                  <input
                    onChange={() => setContinues("год")}
                    name="continues"
                    type={"radio"}
                  />
                  <p>год</p>
                </div>
                <div>
                  <input
                    onChange={() => setContinues("больше года")}
                    name="continues"
                    type={"radio"}
                  />
                  <p>больше года</p>
                </div>
              </div>
              <div className={scss.block}>
                <h1>Делали ли вы блокады?</h1>
                <div>
                  <input
                    onChange={({ target }) => setBlocade(target.value)}
                    defaultChecked
                    name="blockade"
                    type={"radio"}
                    value="Да"
                  />
                  <p>Да</p>
                </div>
                <div>
                  <input
                    onChange={({ target }) => setBlocade(target.value)}
                    value="Нет"
                    name="blockade"
                    type={"radio"}
                  />
                  <p>Нет</p>
                </div>
              </div>
            </label>
            <div className={scss.line}></div>
            <label className="container">
              <p className={scss.bol}>Укажите уровень боли</p>
              <input
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                className={scss.range}
                type={"range"}
                step={"true"}
                min={"1"}
                max={"10"}
                name="range"
              />
              <div className={scss.dots}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) =>
                  num === range ? (
                    <span key={num} className={scss.active}>
                      <p>{range}</p>
                    </span>
                  ) : num < range ? (
                    <span key={num} className={scss.marked}></span>
                  ) : (
                    <span key={num}></span>
                  )
                )}
              </div>
            </label>
            <label className="container">
              <p>Опишите свои жалобы</p>
              <textarea
                value={describe}
                onChange={({ target }) => setDescribe(target.value)}
                name="describe"
                placeholder="Опишите свои жалобы"
                cols={"60"}
                rows={"15"}
              />
            </label>
            <div className={scss.line}></div>
            <div className="container">
              <p>
                Прикрепите архив вашего МРТ-исследования (непосредственно запись
                на диске)
              </p>
              <div className={scss.file}>
                <label>
                  <input
                    onChange={(e) => handleChange(e.target)}
                    type={"file"}
                    name="file"
                  />
                  + Выбрать файл
                  <p
                    onClick={(e) => clearFile(e)}
                    className={fileData ? scss.x : scss.hide}
                  >
                    &#10005;
                  </p>
                </label>
                <p>{fileData.name}</p>
              </div>
            </div>
            <button className={"container btn btn-big-bg"}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
