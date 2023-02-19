import React from "react";
import { useMemo } from "react";
import scss from "./blog.module.scss";
import LinkTop from "../hooks/LinkTop";

const BlogCard = ({ des, img, title, id }) => {
  const renderP = useMemo(
    () => des.map((el, index) => <p key={index}>{el}</p>),
    [des]
  );
  return (
    <>
      <div className={scss.oneBlog}>
        <img src={img} alt="" />
        <div>
          <h1>{title}</h1>
          <div>{renderP}</div>
          <LinkTop to={`/blog/${id}`}>Подробнее</LinkTop>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
