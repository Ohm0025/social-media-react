import { useState } from "react";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import ModalPost from "../component/postModal/ModalPost";
import ModalPostPic from "../component/postModal/ModalPostPic";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  return (
    <div className="min-h-[100vh]">
      <PostBoard
        openModal={() => setIsOpen(true)}
        openPicModal={() => setIsOpenPic(true)}
      />
      <FeedBoard postArr={[]} />
      <ModalPost isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <ModalPostPic
        isOpen={isOpenPic}
        handleClose={() => setIsOpenPic(false)}></ModalPostPic>
    </div>
  );
};

export default HomePage;
