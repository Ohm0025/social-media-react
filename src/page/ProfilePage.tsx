import { useEffect, useState } from "react";
import { getMyPost } from "../api/post";
import PictureBoard from "../component/ProfilePage/PictureBoard";
import ProfileCover from "../component/ProfilePage/ProfileCover";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import ModalPost from "../component/postModal/ModalPost";
import ModalPostPic from "../component/postModal/ModalPostPic";
import { useMyPost } from "../store/myPost";
import DescriptionBoard from "../component/ProfilePage/DescriptionBoard";

const ProfilePage = () => {
  // const [myPostArr, setMyPostArr] = useState<any>([]);
  const { myPostArr, setMyPostArr } = useMyPost();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  const callMyPost = async () => {
    try {
      const res = await getMyPost();
      res.data?.data.length > 0 && setMyPostArr([...res.data?.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callMyPost();
  }, []);
  return (
    <div className="min-h-[100vh]">
      <ProfileCover />
      <div className="w-[80%] min-w-[300px] flex flex-col md:flex-row gap-4 justify-between mx-auto mt-4">
        <div className="flex-1">
          <DescriptionBoard />
          <PictureBoard myPostArr={myPostArr} />
        </div>
        <div className="flex-1">
          <PostBoard
            isProfile={true}
            openModal={() => setIsOpen(true)}
            openPicModal={() => setIsOpenPic(true)}
          />
          <FeedBoard isProfile={true} postArr={myPostArr} />
        </div>
      </div>
      <ModalPost isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <ModalPostPic
        isOpen={isOpenPic}
        handleClose={() => setIsOpenPic(false)}></ModalPostPic>
    </div>
  );
};

export default ProfilePage;
