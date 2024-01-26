import { useEffect, useState } from "react";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import ModalPost from "../component/postModal/ModalPost";
import ModalPostPic from "../component/postModal/ModalPostPic";
import { getStandardPost } from "../api/post";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  const [postArr, setPostArr] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await getStandardPost();
      if (res.status === 200) {
        setPostArr([...res.data?.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(postArr);

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="min-h-[100vh]">
      <PostBoard
        openModal={() => setIsOpen(true)}
        openPicModal={() => setIsOpenPic(true)}
      />
      <FeedBoard postArr={postArr} />
      <ModalPost isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <ModalPostPic
        isOpen={isOpenPic}
        handleClose={() => setIsOpenPic(false)}></ModalPostPic>
    </div>
  );
};

export default HomePage;
