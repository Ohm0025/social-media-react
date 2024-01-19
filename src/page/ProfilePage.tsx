import { useEffect, useState } from "react";
import { getMyPost } from "../api/post";
import PictureBoard from "../component/ProfilePage/PictureBoard";
import ProfileCover from "../component/ProfilePage/ProfileCover";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";

const ProfilePage = () => {
  const [myPostArr, setMyPostArr] = useState<any>([]);
  const callMyPost = async () => {
    try {
      const res = await getMyPost();
      console.log(res.data?.data);
      res.data?.data.length > 0 && setMyPostArr([...res.data?.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callMyPost();
  }, []);
  return (
    <>
      <ProfileCover />
      <div className="w-[80%] min-w-[300px] flex flex-col md:flex-row gap-4 justify-between mx-auto mt-4">
        <div className="flex-1">
          <PictureBoard />
        </div>
        <div className="flex-1">
          <PostBoard isProfile={true} />
          <FeedBoard isProfile={true} postArr={myPostArr} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
