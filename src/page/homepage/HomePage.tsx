import { useEffect, useState } from "react";
import FeedBoard from "../../component/homepage/FeedBoard";
import PostBoard from "../../component/homepage/PostBoard";
import ModalPost from "../../component/postModal/ModalPost";
import ModalPostPic from "../../component/postModal/ModalPostPic";
import { getStandardPost } from "../../api/post";
import UserBar from "../../component/homepage/newUI/UserBar";
import HomeBar from "../../component/homepage/newUI/HomeBar";

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
    <div className="min-h-[100vh] grid grid-cols-[2fr,4fr,2fr]">
      <UserBar />
      <div className="border-l-[1px] border-r-[1px] border-strokeOne py-[20px] px-[15px]">
        <HomeBar />
        <div className="mt-[15px]">
          <PostBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
