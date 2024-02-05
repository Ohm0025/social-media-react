import { useEffect, useState } from "react";
import { getMyPost, getOtherUserPost } from "../api/post";
import PictureBoard from "../component/ProfilePage/PictureBoard";
import ProfileCover from "../component/ProfilePage/profileCover/ProfileCover";
import FeedBoard from "../component/homepage/newUI/feedBoard/FeedBoard";
import PostBoard from "../component/homepage/newUI/postBoard/PostBoard";
import ModalPost from "../component/postModal/ModalPost";
import ModalPostPic from "../component/postModal/ModalPostPic";
import { useMyPost } from "../store/myPost";
import DescriptionBoard from "../component/ProfilePage/DescriptionBoard";
import { useParams } from "react-router-dom";
import { useUser } from "../store/user";

type Props = {
  searchUserId?: number;
  isOther?: boolean;
  callData?: () => void;
};

const ProfilePage = (props: Props) => {
  const { searchUserId } = useParams();
  const { myPostArr, setMyPostArr, modPostArr } = useMyPost();
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

  const updateCountOne = (postid: number, targetKey: string, value: number) => {
    console.log("update count");
    if (isOther) {
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
    } else {
      modPostArr(postid, targetKey, value);
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
    <div className="min-h-[100vh]">
      <ProfileCover
        callData={props.callData}
        isOther={isOther}
        otherObj={otherObj}
        otherCover={otherObj?.profile_cover}
        otherPicture={otherObj?.prpfile_picture}
      />
      <div className="w-full min-w-[300px]">
        <DescriptionBoard isOther={isOther} otherDes={otherObj?.description} />
      </div>
    </div>
  );
};

export default ProfilePage;
