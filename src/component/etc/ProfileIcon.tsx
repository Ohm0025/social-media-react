import { useUser } from "../../store/user";

type Props = {
  radius: string;
  textSize?: string;
  bgColor?: string;
  openDropdown?: () => void;
  isOpen?: boolean | undefined;
  profilePicture?: string | undefined;
  isProfile?: boolean;
};

const ProfileIcon = ({
  radius,
  textSize,
  bgColor = "#f7f7f7",
  openDropdown = () => {},
  isOpen,
  profilePicture,
  isProfile,
}: Props) => {
  const { userObj } = useUser();
  return (
    <button
      onClick={openDropdown}
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
