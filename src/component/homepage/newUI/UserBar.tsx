import IconUserBar from "../../etc/IconUserBar";
import ProfileIcon from "../../etc/ProfileIcon";
import homeIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/homeIcon.svg";
import friendIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/friendIcon.svg";
import profileIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/profileIcon.svg";
import messageIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/messageIcon.svg";
import logoutIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/logoutIcon.svg";
import ModalPost from "../../postModal/ModalPost";
import { useState } from "react";

const UserBar = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  return (
    <div className="flex flex-col items-end">
      <div className="mt-[26px] flex flex-col w-[190px]">
        <ProfileIcon radius="40px" />
        <div className="mt-[26px] text-[16px] font-medium flex flex-col gap-[40px]">
          <IconUserBar iconSrc={homeIcon} labelName="Home" color="black" />
          <IconUserBar iconSrc={friendIcon} labelName="Friends" color="black" />
          <IconUserBar
            iconSrc={messageIcon}
            labelName="Messages"
            color="black"
          />
          <IconUserBar
            iconSrc={profileIcon}
            labelName="Profile"
            color="black"
          />
          <IconUserBar iconSrc={logoutIcon} labelName="Log out" color="black" />
          <button
            className="rounded-[4px] bg-textOne text-white text-center py-2 w-[60%]"
            onClick={() => setOpenPostModal(true)}>
            + New Post
          </button>
        </div>
        <ModalPost
          isOpen={openPostModal}
          handleClose={() => setOpenPostModal(false)}
          aftersubmit={() => {}}
        />
      </div>
    </div>
  );
};

export default UserBar;
