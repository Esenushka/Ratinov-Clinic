import { memo, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import scss from "./CourseOfTreatmentBlock.module.scss";

export default memo(function ProcedureBlock({ col, block }) {
  const [procedure, setProcedure] = useState([]);
  useEffect(() => {
    db.collection("procedure")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const procedureArr = [];
        snapshot.forEach((doc) => {
          procedureArr.push({ ...doc.data(), id: doc.id });
        });
        setProcedure(procedureArr);
      });
  }, []);
  return (
    <div
      className={scss.lastOne}
      style={{
        margin: `${block ? "0 24px" : ""}`,
        marginTop: `${block ? "20px" : ""}`,
      }}
    >
      <ul>
        <li
          style={{
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "23px",
            color: "#0097DB",
          }}
        >
          Мы создаем необходимые условия, чтобы запустить и ускорить процесс
          резорбции, применяя комплексную физиотерапию:
        </li>
      </ul>
      <div
        style={{ display: `${block ? "block" : "flex"}` }}
        className={scss.procedure_blocks_wrapper + " " + (col ? scss.col : "")}
      >
        {procedure.map((info) => (
          <div
            style={{ width: `${block ? "100%" : "27%"}` }}
            className={scss.procedure_block}
            key={info.id}
          >
            <h3>{info.title}</h3>
            <p>{info.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
