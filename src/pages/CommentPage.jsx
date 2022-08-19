import React, { useEffect, useState } from "react";
import CallMe from "../components/CallMe/CallMe";
import Comment from "../components/Comment/Comment";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";
import { db } from "../config/firebase";

export default React.memo(function CommentPage() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    db.collection("comments")
      .get()
      .then((snapshot) => {
        const commentsArr = []
        snapshot.forEach((doc) => {
          commentsArr.push({ ...doc.data(), id: doc.id });
        })
        setComments(commentsArr.sort((a, b) => parseFloat(a.pos) - parseFloat(b.pos)))
        setLoading(false)
      })
  }, []);
  return (
    <div>
      <Preloader loadingImage={loadingImage} loading={loading} />
      <Header />
      <Comment setLoadingImage={setLoadingImage} comments={comments} />
      <YouTubeSlider />
      <CallMe />
      <Footer />
    </div>
  );
}
)