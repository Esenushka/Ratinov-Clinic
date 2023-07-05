import React, { useState } from "react";
import scss from "./modalWorker.module.scss";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";


const ModalWorker = ({ isOpen, setOpen }) => {
    const [name, setName] = useState("")
    const [placeOfJob, setPlaceJob] = useState('')
    const [job, setJob] = useState('')
    const [number, setNumber] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            phone: number,
            job: job,
            placeOfJob: placeOfJob
        }
        emailjs
            .send(
                "service_c7n4zs6",
                "template_gworftr",
                { ...data },
                "bayX5lJh7w2M_Okjm",
                toast("Ваша заявка принята ожидайте ответа")
            )
            .then(
                () => {
                    setName("");
                    setPlaceJob("");
                    setJob("");
                    setNumber("");
                    setOpen(false)
                },
                (error) => {
                    alert(error.text);
                }
            );
    };

    return (
        <div onClick={() => setOpen(false)} className={isOpen ? scss.wrapper : scss.hide}>

            <form onSubmit={(e) => sendEmail(e)} onClick={(e) => e.stopPropagation()} className={scss.innerContent}>
                <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="Иван Иванов" />
                <input value={placeOfJob} onChange={(e) => setPlaceJob(e.target.value)} required type="text" placeholder="Место работы" />
                <input value={job} onChange={(e) => setJob(e.target.value)} required type="text" placeholder="Должность" />
                <PhoneInput
                    value={number}
                    onChange={(value) => setNumber(value)}
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
                        background: "#FFFFFF",
                    }}
                    inputStyle={{
                        background: "#fff",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "45px",
                    }}
                    buttonStyle={{
                        background: "#fff",
                        border: "rgb(114, 112, 112) 1px solid",
                        borderRadius: "10px",
                        fontSize: "10px",
                        outline: "none"
                    }}
                    dropdownStyle={{
                        fontSize: "10px",
                    }}
                    placeholder=" + (999) 999-999"
                />
                <button>Отправить</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ModalWorker;