import IconUserBar from "../../etc/IconUserBar";
import ProfileIcon from "../../etc/ProfileIcon";
import homeIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/homeIcon.svg";
import friendIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/friendIcon.svg";
import profileIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/profileIcon.svg";

const UserBar = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="mt-[26px] flex flex-col w-[190px]">
        <ProfileIcon radius="40px" />
        <div className="mt-[26px] text-[16px] font-medium flex flex-col gap-[40px]">
          <IconUserBar iconSrc={homeIcon} labelName="Home" color="black" />
          <IconUserBar iconSrc={friendIcon} labelName="Friends" color="black" />
          <IconUserBar
            iconSrc={profileIcon}
            labelName="Profile"
            color="black"
          />
        </div>
      </div>
    </div>
  );
};

export default UserBar;
