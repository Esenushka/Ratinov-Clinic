import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import scss from "./blog.module.scss";
import { db } from "../config/firebase";
import BlogCard from "./BlogCard";
import { useMemo } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";
import TopBlock from "../components/TopBlock/TopBlock";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("blog")
      .get()
      .then((snapshot) => {
        const aboutArr = [];
        snapshot.forEach((doc) => {
          aboutArr.push({ ...doc.data(), id: doc.id });
        });
        setBlog(aboutArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)));
        setLoading(false);
      });
  }, []);

  const renderCard = useMemo(
    () =>
      blog.map((el) => {
        return <BlogCard key={el.id} {...el} />;
      }),
    [blog]
  );
  const [isHeader, setHeader] = useState(true);

  return (
    <>
      <Preloader loading={loading} />
      <Header isHeader={isHeader} setHeader={setHeader} />
      <TopBlock text={""} bold={"Блог"} path={""} />
      <div className={"container " + scss.wrapper}>{renderCard}</div>
      <Footer />;
    </>
  );
};

export default Blog;
