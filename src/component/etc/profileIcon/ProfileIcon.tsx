import { useUser } from "../../../store/user";
import useProfileIcon from "./ProfileIcon.hook";
import userIcon from "../../../assets/svg/user.svg";

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
      className={`rounded-full border border-strokeTwo text-[${textSize}] overflow-hidden text-center bg-white`}>
      {profilePicture ? (
        <div dangerouslySetInnerHTML={{ __html: profilePicture }}></div>
      ) : isProfile && userObj.profile_picture ? (
        <div
          dangerouslySetInnerHTML={{ __html: userObj.profile_picture }}></div>
      ) : (
        <img
          src={userIcon}
          style={{
            width: radius,
            height: radius,
          }}></img>
      )}
    </button>
  );
};

export default ProfileIcon;
