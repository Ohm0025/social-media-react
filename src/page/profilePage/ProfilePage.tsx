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
      return (
        <DescriptionBoard isOther={isOther} otherDes={otherObj?.description} />
      );
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
