import IconUserBar from "../../etc/IconUserBar";
import ProfileIcon from "../../etc/ProfileIcon";
import homeIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/homeIcon.svg";
import friendIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/friendIcon.svg";
import profileIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/profileIcon.svg";
import messageIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/messageIcon.svg";
import logoutIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/logoutIcon.svg";
import ModalPost from "../../postModal/ModalPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BBB_COOKIES } from "../../../utils/constant";

type Props = {
  currentPage: string;
};

const UserBar = ({ currentPage }: Props) => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([BBB_COOKIES]);
  return (
    <div className="flex flex-col items-end">
      <div className="mt-[26px] flex flex-col w-[190px]">
        <ProfileIcon radius="40px" isProfile={true} />
        <div className="mt-[26px] text-[16px] font-medium flex flex-col gap-[40px]">
          <IconUserBar
            iconSrc={homeIcon}
            labelName="Home"
            color={`${currentPage === "" ? "#a9a9a9" : "black"}`}
            cb={() => navigate("/final-project/")}
          />
          <IconUserBar
            iconSrc={friendIcon}
            labelName="Friends"
            color={`${currentPage === "friend" ? "#a9a9a9" : "black"}`}
            cb={() => navigate("/final-project/friend")}
          />
          <IconUserBar
            iconSrc={messageIcon}
            labelName="Messages"
            color={`${currentPage === "demochat" ? "#a9a9a9" : "black"}`}
            cb={() => navigate("/final-project/demochat")}
          />
          <IconUserBar
            iconSrc={profileIcon}
            labelName="Profile"
            color={`${currentPage === "profile" ? "#a9a9a9" : "black"}`}
            cb={() => navigate("/final-project/profile")}
          />
          <IconUserBar
            iconSrc={logoutIcon}
            labelName="Log out"
            color="black"
            cb={() => {
              removeCookie(BBB_COOKIES);
              navigate("/final-project/authen/login");
            }}
          />
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
