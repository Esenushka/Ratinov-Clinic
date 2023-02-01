import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";

export default memo(function Select() {
  const location = useLocation();
  const navigate = useNavigate();
  const paramEntries = new URLSearchParams(location.search).entries();
  const fromEntries = Object.fromEntries(paramEntries);
  const paramArr = Object.keys(fromEntries);
  const handleChange = (e, proffesion, type) => {
    type
      ? navigate("/doctors")
      : e.target.checked
      ? navigate(
          location.pathname +
            "?" +
            proffesion +
            "&" +
            paramArr.map((param) => param + "&").join("")
        )
      : navigate(
          location.pathname +
            "?" +
            paramArr
              .filter((param) => param !== proffesion)
              .map((param) => param + "&")
              .join("")
        );
  };
  const [proffesions, setProffesions] = useState([]);
  useEffect(() => {
    db.collection("proffesions")
      .orderBy("pos", "asc")
      .get()
      .then((snapshot) => {
        const proffesionsArr = [];
        snapshot.forEach((doc) => {
          proffesionsArr.push({ ...doc.data(), id: doc.id });
        });
        setProffesions(proffesionsArr);
      });
  }, []);
  return (
    <div className="select_wrapper">
      <span className={`active`}>
        <h1
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#333333",
            borderBottom: "1px solid  #DADADA",
            paddingBottom: "20px",
          }}
        >
          Специализация
        </h1>
      </span>
      <div className={`checkboxs  active`}>
        {proffesions.map((el) => (
          <span
            key={el.id}
            className="checkbox"
            style={{ alignItems: "flex-start", margin: "15px 0px" }}
          >
            <input
              onChange={(e) => handleChange(e, el.proffesion)}
              checked={
                paramArr.find((param) => param === el.proffesion) || false
              }
              type="checkbox"
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#333333",
              }}
            >
              {el.proffesion}
            </p>
          </span>
        ))}
        <span
          className="checkbox"
          style={{ alignItems: "flex-start", marginTop: "10px" }}
        >
          <input
            onChange={(e) => handleChange(e, null, true)}
            checked={paramArr.length === 0 ? true : false}
            type="checkbox"
          />
          <p>Все</p>
        </span>
      </div>
    </div>
  );
});
