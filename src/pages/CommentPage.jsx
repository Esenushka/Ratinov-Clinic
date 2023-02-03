import React, { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Comment from "../components/Comment/Comment";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import Topblock from "../components/TopBlock/TopBlock";
import { db } from "../config/firebase";

export default React.memo(function CommentPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    db.collection("comments")
      .get()
      .then((snapshot) => {
        const commentsArr = [];
        snapshot.forEach((doc) => {
          commentsArr.push({ ...doc.data(), id: doc.id });
        });
        setComments(
          commentsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos))
        );
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Preloader loading={loading} />
      <Header />
      <Topblock bold={"Отзывы"} />
      <Comment comments={comments} />
      <CallMe />
      <Footer />
    </div>
  );
});
