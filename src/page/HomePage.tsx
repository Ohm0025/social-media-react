import PostBoard from "../component/homepage/PostBoard";
import TopBar from "../component/homepage/TopBar";

const HomePage = () => {
  return (
    <div className="min-h-[100vh]">
      <TopBar />
      <PostBoard />
    </div>
  );
};

export default HomePage;
