import { useState } from "react";
import ProfileCover from "../../component/ProfilePage/profileCover/ProfileCover";
import FeedBoard from "../../component/homepage/newUI/feedBoard/FeedBoard";
import { useMyPost } from "../../store/myPost";
import DescriptionBoard from "../../component/ProfilePage/DescriptionBoard";
import { useParams } from "react-router-dom";
import { useUser } from "../../store/user";
import { usePageProfile } from "../../store/pageProfile";

type Props = {
  searchUserId?: number;
  isOther?: boolean;
  callData?: () => void;
};

const ProfilePage = (props: Props) => {
  const { searchUserId } = useParams();
  const { modPostArr } = useMyPost();

  const { userObj } = useUser();
  const { currentPageProfile } = usePageProfile();

  let isOther = searchUserId ? Number(searchUserId) !== userObj.userid : false;

  const [otherObj, setOtherObj] = useState<any>(null);
  const [postArr, setPostArr] = useState<any>([]);

  // const updateCountOne = (postid: number, targetKey: string, value: number) => {
  //   console.log("update count");
  //   if (isOther) {
  //     setPostArr((prev: any) => {
  //       return [
  //         ...prev.map((item: any) => {
  //           if (item.postid === postid) {
  //             return { ...item, [targetKey]: Number(item[targetKey]) + value };
  //           }
  //           return item;
  //         }),
  //       ];
  //     });
  //   } else {
  //     modPostArr(postid, targetKey, value);
  //   }
  // };

  const selectElement = () => {
    if (currentPageProfile === "post") {
      return <FeedBoard isProfile={true} />;
    } else if (currentPageProfile === "bio") {
      return <DescriptionBoard isOther={false} />;
    } else if (currentPageProfile === "picture") {
      return <h2>All Picture Post</h2>;
    }
  };

  return (
    <div className="min-h-[100vh]">
      <ProfileCover
        callData={props.callData}
        isOther={isOther}
        otherUserId={Number(searchUserId)}
        otherObj={otherObj}
        otherCover={otherObj?.profile_cover}
        otherPicture={otherObj?.prpfile_picture}
      />
      <div className="w-full min-w-[300px] mt-[15px] px-[15px]">
        {selectElement()}
      </div>
    </div>
  );
};

export default ProfilePage;
