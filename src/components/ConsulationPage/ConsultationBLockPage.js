import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import LinkTop from "../../hooks/LinkTop";
import scss from "./ConsultationPage.module.scss";
import emailjs from "@emailjs/browser";
import { storageRef } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function ConsultationBlockPage({ setLoadingImage }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState(1);
  const [describe, setDescribe] = useState("");
  const [continues, setContinues] = useState("в течение месяца");
  const [blockade, setBlocade] = useState("Да");
  const [fileData, setFileData] = useState("");
  const navigate = useNavigate()

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
    if (fileData) {
      storageRef
        .ref("mrt/" + fileData.name)
        .put(fileData)
        .then(() => {
          getUrl(fileData.name).then((url) => {
            emailjs
              .send(
                "service_v7uicjf",
                "template_mp5ryv4",
                { ...data, file: url },
                "9u7Ks_f1ZeJAn8ivx"
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
                  console.log(error.text);
                }
              );
          });
        });
    }
  };


  const handleChange = (target) => {
    if (target.files.length) {
      const reader = new FileReader();
      setFileData(target.files[0]);
      reader.readAsDataURL(target.files[0]);
    }
  };

  return (
    <div className={scss.main_wrapper}>
      <div className={scss.top}>
        <img
          onLoad={() => setLoadingImage(false)}
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F56890d3d9445bfaa9e863dc98daf01f0.png?alt=media&token=0423516e-7a07-4dc9-9fa3-cb1154bc24cb"
          alt="Задний фон"
        />
        <div className="container">
          <h2>
            <span>Предварительная дистанционная консультация</span> по МРТ
            позвоночника в нашей клинике предоставляется иностранным/иногородним
            пациентам, которым далеко и трудно добраться до нашей клиники.
          </h2>
        </div>
      </div>
      <div className={scss.wrapper_bg}>
        <div className={scss.bg}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2F59150a0051643acc5d2e897713473bbb%201.png?alt=media&token=dbb96b3c-192f-492d-8377-8def8cf394ae"
            alt="Задний блок"
          />
        </div>
      </div>

      <div className={"container " + scss.wrapper}>
        <p>
          На онлайн консультации Вы получите заключение о возможности «Резорбции
          Вашей Грыжи», о состоянии вашего позвоночника и потенциальной
          эффективности нашего лечения.
        </p>
        <p>Онлайн консультация проводится главврачом клиники </p>
        <LinkTop className={scss.to_doctor} to={"/doctors"}>
          <span>Ратиновым Андреем Сергеевичем. </span>
        </LinkTop>
        <LinkTop className={scss.take_consultation} to={"/"}>
          Стоимость консультации 1000 сомов
        </LinkTop>
        <div>
          <h1>
            <span>Требования к</span> МРТ
          </h1>
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
        <div>
          <h1>
            <span>Что делать, если </span>
            нет МРТ в электронной версии?
          </h1>
          <p>
            Обратитесь в тот диагностический центр, в котором проходили
            исследование, и запросите у них запись МРТ в электронном виде на
            диске или флеш-карте.
          </p>
        </div>
        <form onSubmit={sendEmail} className={scss.form}>
          <h1>Чтобы получить консультацию заполните форму ниже:</h1>
          <label>
            <p>Имя*</p>
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
              name="name"
              type={"text"}
              placeholder={"Иванов Иван"}
              required
            />
          </label>
          <label>
            <p>Дата рождения</p>
            <input
              vlaue={date}
              onChange={({ target }) => setDate(target.value)}
              name="date"
              type={"date"}
              placeholder={"10.05.2022"}
            />
          </label>
          <label>
            <p>Номер Вашего телефона*</p>
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
                width: "60%",
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
          </label>
          <label>
            <p>Укажите уровень боли</p>
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
          <label>
            <p>Опишите свои жалобы</p>
            <textarea
              value={describe}
              onChange={({ target }) => setDescribe(target.value)}
              name="describe"
              placeholder="Онемение руки, боль в плече, приступы головной боли..."
              cols={"60"}
              rows={"15"}
            />
          </label>
          <label>
            <p>Опишите свои жалобы</p>
            <div className={scss.block}>
              <span>Когда возобновились или начались боли?</span>
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
              <span>Делали ли вы блокады?</span>
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
          <label>
            <b>Прикрепить снимки МРТ в архиве ZIP, следуя инструкции ниже:</b>
            <ul>
              <li>Вставьте CD-диск с исследованием в дисковод</li>
              <li>
                У вас на экране монитора автоматически откроется его содержимое
              </li>
              <li>
                Нажмите правой кнопкой на папку "DICOM" и выберете «копировать»
                вставляем папку на рабочий стол нажимаем
                <span>
                  {" "}
                  правой кнопкой на папку и выбираем «Добавить в архив…»
                </span>
              </li>
              <li>выбираем zip и нажимаем готово</li>
            </ul>
          </label>
          <label>
            <b>Видеоинструкция «Как создать архив со снимками МРТ?»</b>
            <div className={scss.instruction}>
              <img src="/images/camera.svg" alt="камера" />
            </div>
          </label>
          <div>
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
              </label>
              <p>{fileData.name}</p>
            </div>
          </div>
          <button className="btn btn-big-bg">Отправить</button>
        </form>
      </div>
      <div className={scss.wrapper_bg2}>
        <div className={scss.bg2}>
          <img
            onLoad={() => setLoadingImage(false)}
            src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fspine-bg.png?alt=media&token=b2881cab-f1cf-4306-bf62-e832abe459be"
            alt="Задний блок"
          />
        </div>
      </div>
    </div>
  );
}
