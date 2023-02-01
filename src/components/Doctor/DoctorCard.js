import scss from "./Doctor.module.scss";

export default function DoctorCard({ title, des }) {
  return (
    <div className={scss.block}>
      <div className="container">
        <p>{title}</p>
        <div className={scss.active}>
          <ul>
            {des.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
