import { useEffect, useState } from "react";
import FeedBoard from "../../component/homepage/newUI/feedBoard/FeedBoard";
import PostBoard from "../../component/homepage/newUI/postBoard/PostBoard";
import ModalPost from "../../component/postModal/ModalPost";
import ModalPostPic from "../../component/postModal/ModalPostPic";
import { getStandardPost } from "../../api/post";
import UserBar from "../../component/homepage/newUI/UserBar";
import HomeBar from "../../component/homepage/newUI/HomeBar";
import FriendFinding from "../../component/friendPage/FriendFinding";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  const [postArr, setPostArr] = useState<any>([]);

  const updateCountOne = (postid: number, targetKey: string, value: number) => {
    setPostArr((prev: any) => {
      return [
        ...prev.map((item: any) => {
          if (item.postid === postid) {
            return { ...item, [targetKey]: Number(item[targetKey]) + value };
          }
          return item;
        }),
      ];
    });
  };

  return (
    <div className="mt-[15px] px-[15px]">
      <HomeBar />
      <PostBoard />
      <FeedBoard isProfile={false} />
    </div>
  );
};

export default HomePage;
