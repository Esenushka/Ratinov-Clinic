import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import css from './Consultation.module.scss';

export default function About() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    db.collection("about")
      .get()
      .then((snapshot) => {
        const aboutArr = [];
        snapshot.forEach((doc) => {
          aboutArr.push({ ...doc.data(), id: doc.id });
        })
        setAbout(aboutArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
      });
  }, []);
  return (
    <div id="about" className={`${css.about} container`}>
      <h1>О НАШЕЙ КЛИНИКЕ</h1>
      <div className={css.about_card}>
        {
          about.map((info) => <div className={css.card} key={info.id}>
            <img src={info.img} alt={"Картинка о клиники"} />
            {
              info.reverse ?
                <div>
                  <span>{info.text}</span>
                  {" "}
                  <b>{info.bold}</b>
                </div> : <div>
                  <b>{info.bold}</b>
                  {" "}
                  <span>{info.text}</span>
                </div>
            }
          </div>)
        }
      </div>
    </div>
  )
}
