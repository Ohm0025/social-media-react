import { useEffect, useState } from "react";
import { getMyPost, getOtherUserPost } from "../api/post";
import PictureBoard from "../component/ProfilePage/PictureBoard";
import ProfileCover from "../component/ProfilePage/ProfileCover";
import FeedBoard from "../component/homepage/FeedBoard";
import PostBoard from "../component/homepage/PostBoard";
import ModalPost from "../component/postModal/ModalPost";
import ModalPostPic from "../component/postModal/ModalPostPic";
import { useMyPost } from "../store/myPost";
import DescriptionBoard from "../component/ProfilePage/DescriptionBoard";
import { useParams } from "react-router-dom";
import { useUser } from "../store/user";

type Props = {
  searchUserId?: number;
  isOther?: boolean;
};

const ProfilePage = ({}: Props) => {
  const { searchUserId } = useParams();
  const { myPostArr, setMyPostArr } = useMyPost();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  const { userObj } = useUser();

  let isOther = searchUserId ? searchUserId !== userObj.userid : false;

  const [otherObj, setOtherObj] = useState<any>(null);
  const [postArr, setPostArr] = useState<any>([]);
  const callMyPost = async () => {
    try {
      const res = await getMyPost();
      res.data?.data.length > 0 && setMyPostArr([...res.data?.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const callUserPost = async () => {
    try {
      const res = await getOtherUserPost(Number(searchUserId));
      console.log(res);
      res.data?.data.length > 0 && setPostArr([...res.data?.data]);
      isOther && setOtherObj({ ...res.data?.userObj });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchUserId) {
      callUserPost();
      console.log(searchUserId);
    } else {
      callMyPost();
    }
  }, []);
  return (
    <div className="min-h-[100vh] pb-6">
      <ProfileCover
        isOther={isOther}
        otherObj={otherObj}
        otherCover={otherObj?.profile_cover}
        otherPicture={otherObj?.prpfile_picture}
      />
      <div className="w-[80%] min-w-[300px] flex flex-col md:flex-row gap-4 justify-between mx-auto mt-4">
        <div className="flex-1">
          <DescriptionBoard
            isOther={isOther}
            otherDes={otherObj?.description}
          />
          <PictureBoard myPostArr={isOther ? postArr : myPostArr} />
        </div>
        <div className="flex-1">
          {!isOther && (
            <PostBoard
              isProfile={true}
              openModal={() => setIsOpen(true)}
              openPicModal={() => setIsOpenPic(true)}
            />
          )}
          {postArr.length > 0 || myPostArr.length > 0 ? (
            <FeedBoard
              isProfile={true}
              postArr={isOther ? postArr : myPostArr}
              isOther={isOther}
            />
          ) : (
            <div
              className={`bg-white w-full flex justify-center items-center rounded-md shadow-md py-4 ${
                isOther ? "" : "mt-4"
              }`}>
              <h1 className="">Empty Post</h1>
            </div>
          )}
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
