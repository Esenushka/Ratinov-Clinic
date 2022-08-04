import CallMe from "../components/CallMe/CallMe";
import Comment from "../components/Comment/Comment";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import YouTubeSlider from "../components/YouTubeSlider/YouTubeSlider";

export default function CommentPage() {
  return (
    <div>
      <Header />
      <Comment />
      <YouTubeSlider />
      <CallMe />
      <Footer />
    </div>
  );
}
