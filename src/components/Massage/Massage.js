import { useEffect, useState } from "react"
import { db } from "../../config/firebase";
import scss from "./Massage.module.scss"

export default function Massage() {
  const [massage, setMassage] = useState([]);
  useEffect(() => {
    db.collection("massage")
      .get()
      .then((snapshot) => {
        const massageArr = [];
        snapshot.forEach((doc) => {
          massageArr.push({ ...doc.data(), id: doc.id })
        })
        setMassage(massageArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      })
  }, [])
  return (
    <div className={scss.wrapper}>
      <div className={scss.bg}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ratinov-clinic-401b0.appspot.com/o/images%2Fmassage-bg.png?alt=media&token=c780873e-c9f2-4c15-be66-98f592501da3"
          alt="Задний фон массаж"
        />
      </div>
      <div className="container">
        {
          massage.map((info) => <div key={info.id} className={scss.blocks_wrapper}>
            <h1>{info.name}</h1>
            {
              info.list.map((text, index) => <div key={index} className={scss.block}>
                <p>{text.title}</p>
                <p>{text.text}</p>
              </div>)
            }
          </div>)
        }
      </div>
    </div>
  )
}
