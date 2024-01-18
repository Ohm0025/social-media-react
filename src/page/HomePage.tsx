import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import TopBar from "../component/homepage/TopBar";

const HomePage = () => {
  return (
    <div className="min-h-[100vh]">
      <PostBoard />
      <FeedBoard />
    </div>
  );
};

export default HomePage;
