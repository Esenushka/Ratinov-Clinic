import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import Preloader from "../components/Preloader/Preloader";
import scss from "./blog.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BlogMore = () => {
  const params = useParams();
  const [blog, setBlog] = useState();
  const [isview, setView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isHeader, setHeader] = useState(true);

  useEffect(() => {
    db.collection("blog")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.id === params.id ? setBlog(doc.data()) : doc.data();
        });
        setView(true);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <>
      {isview ? (
        <>
          <Header isHeader={isHeader} setHeader={setHeader} />
          <div className={"container " + scss.moreBlog}>
            <img src={blog.img} alt={blog.title} />
            <h1>{blog.title}</h1>
            <ul className={scss.ulList}>
              {blog.des.map((el, i) => (
                <li key={`${i}_${el}`}>{el}</li>
              ))}
            </ul>
          </div>
          <Footer />
        </>
      ) : (
        <Preloader loading={loading} loadingImage={false} />
      )}
    </>
  );
};

export default BlogMore;
