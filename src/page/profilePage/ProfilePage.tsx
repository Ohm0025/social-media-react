import ProfileCover from "../../component/ProfilePage/profileCover/ProfileCover";
import FeedBoard from "../../component/homepage/newUI/feedBoard/FeedBoard";
import DescriptionBoard from "../../component/ProfilePage/DescriptionBoard";
import { usePageProfile } from "../../store/pageProfile";
import useProfilePageHook from "./ProfilePage.hook";
import DelayBox from "../../component/delayBox/DelayBox";

type Props = {
  searchUserId?: number;
  isOther?: boolean;
  callData?: () => void;
};

const ProfilePage = (props: Props) => {
  const { isOther, otherUserId, otherObj } = useProfilePageHook();
  const { currentPageProfile } = usePageProfile();

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
      return (
        <FeedBoard
          isFriend={otherObj?.userStatus}
          isProfile={true}
          isOther={isOther}
          otherId={otherObj?.userid}
        />
      );
    } else if (currentPageProfile === "bio") {
      return <DescriptionBoard isOther={false} />;
    } else if (currentPageProfile === "picture") {
      return <h2>All Picture Post</h2>;
    }
  };

  return (
    <DelayBox>
      <div className="min-h-[100vh]">
        <ProfileCover
          callData={props.callData}
          isOther={isOther}
          otherUserId={otherUserId}
          otherObj={otherObj}
        />
        <div className="w-full min-w-[300px] mt-[15px] px-[15px]">
          {selectElement()}
        </div>
      </div>
    </DelayBox>
  );
};

export default ProfilePage;
