import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";

const HomePage = () => {
  return (
    <div className="min-h-[100vh]">
      <PostBoard />
      <FeedBoard />
    </div>
  );
};

export default HomePage;
