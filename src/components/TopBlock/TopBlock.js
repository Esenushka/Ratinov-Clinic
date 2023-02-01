import { memo } from "react";
import scss from "./TopBlock.module.scss";

export default memo(function TopBlock({
  text,
  bold,
  reverse,
  path,
  secondPath,
}) {
  return (
    <>
      <div className={scss.wrapper}>
        <div className="container">
          <h1 className={reverse ? scss.reverse : ""}>
            {bold}
            {" "}
            {text}
          </h1>
        </div>
      </div>
      <div className="container">
        <p className={scss.path}>
         {" " + path + " "}
          {secondPath ? " / " + secondPath : ""}
        </p>
      </div>
    </>
  );
});
