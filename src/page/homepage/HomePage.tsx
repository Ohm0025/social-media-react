import FeedBoard from "../../component/homepage/newUI/feedBoard/FeedBoard";
import PostBoard from "../../component/homepage/newUI/postBoard/PostBoard";

import HomeBar from "../../component/homepage/newUI/HomeBar";

const HomePage = () => {
  return (
    <div className="mt-[15px] px-[15px]">
      <HomeBar />
      <PostBoard isProfile={false} />
      <FeedBoard isProfile={false} />
    </div>
  );
};

export default HomePage;
