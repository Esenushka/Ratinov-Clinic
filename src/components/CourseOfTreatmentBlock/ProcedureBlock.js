import { procedureList } from "../../constants/procedureList"
import scss from "./CourseOfTreatmentBlock.module.scss"

export default function ProcedureBlock({col}) {
  return (
    <div className={scss.procedure_blocks_wrapper + " " + (col ? scss.col : "")}>
      {
        procedureList.map((el) => <div className={scss.procedure_block} key={el.id}>
          <h3>{el.title}</h3>
          <p>{el.info}</p>
          <span>{el.procedures}</span>
        </div>)
      }
    </div>
  )
}
