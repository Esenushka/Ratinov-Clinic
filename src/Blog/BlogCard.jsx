import React from "react";
import { useMemo } from "react";
import scss from "./blog.module.scss";

const BlogCard = ({ des, img, title }) => {
  const renderP = useMemo(
    () => des.map((el, index) => <p key={index}>{el}</p>),
    [des]
  );
  return (
    <div className={scss.oneBlog}>
      <img src={img} alt="" />
      <div>
        <h1>{title}</h1>
        <div>{renderP}</div>
      </div>
    </div>
  );
};

export default BlogCard;
