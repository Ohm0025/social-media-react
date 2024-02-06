import { useUser } from "../../../store/user";
import useProfileIcon from "./ProfileIcon.hook";

type Props = {
  radius: string;
  textSize?: string;
  bgColor?: string;
  openDropdown?: () => void;
  isOpen?: boolean | undefined;
  profilePicture?: string | undefined;
  isProfile?: boolean;
  otherUserId?: number;
};

const ProfileIcon = ({
  radius,
  textSize,
  bgColor = "#f7f7f7",
  openDropdown = () => {},
  isOpen,
  profilePicture,
  isProfile,
  otherUserId,
}: Props) => {
  const { userObj } = useUser();

  const { clickToOther } = useProfileIcon();

  return (
    <button
      onClick={() => {
        if (!isProfile && otherUserId !== userObj.userid) {
          otherUserId && clickToOther(otherUserId);
        }
      }}
      style={{
        width: radius,
        height: radius,
        fontSize: textSize,
      }}
      className={`rounded-full border border-strokeTwo text-[${textSize}] overflow-hidden bg-[${
        isOpen ? "#ffbc12" : bgColor
      }] text-center`}>
      {profilePicture ? (
        <div dangerouslySetInnerHTML={{ __html: profilePicture }}></div>
      ) : isProfile ? (
        <div
          dangerouslySetInnerHTML={{ __html: userObj.profile_picture }}></div>
      ) : (
        <i className="fa-solid fa-user"></i>
      )}
    </button>
  );
};

export default ProfileIcon;
