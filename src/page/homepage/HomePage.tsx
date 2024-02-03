import { useEffect, useState } from "react";
import FeedBoard from "../../component/homepage/FeedBoard";
import PostBoard from "../../component/homepage/PostBoard";
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

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="mt-[15px] px-[15px]">
      <HomeBar />
      <PostBoard />
      <FeedBoard
        postArr={[
          { firstname: "porramat", lastname: "thapeg" },
          { firstname: "porramat", lastname: "thapeg" },
        ]}
      />
    </div>
  );
};

export default HomePage;
