import { memo, useEffect, useState } from "react"
import { db } from "../../config/firebase";
import scss from "./CourseOfTreatmentBlock.module.scss"

export default memo(function ProcedureBlock({ col }) {
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
    <div className={scss.procedure_blocks_wrapper + " " + (col ? scss.col : "")}>
      {
        procedure.map((info) => <div className={scss.procedure_block} key={info.id}>
          <h3>{info.title}</h3>
          <p>{info.info}</p>
          <span>{info.procedures}</span>
        </div>)
      }
    </div>
  )
})
