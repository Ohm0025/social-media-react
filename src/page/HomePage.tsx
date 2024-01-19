import { useState } from "react";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import ModalPost from "../component/postModal/ModalPost";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-[100vh]">
      <PostBoard openModal={() => setIsOpen(true)} />
      <FeedBoard />
      <ModalPost isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default HomePage;
