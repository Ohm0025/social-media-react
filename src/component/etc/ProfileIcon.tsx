import { API_URL } from "../../utils/constant";
import { formatPicName } from "../../utils/formatPicName";

type Props = {
  radius: string;
  textSize?: string;
  bgColor?: string;
  openDropdown?: () => void;
  isOpen?: boolean | undefined;
  profilePicture?: string | undefined;
};

const ProfileIcon = ({
  radius,
  textSize,
  bgColor = "#f7f7f7",
  openDropdown = () => {},
  isOpen,
  profilePicture,
}: Props) => {
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
        <img src={`${API_URL}/images${formatPicName(profilePicture)}`} alt="" />
      ) : (
        <i className="fa-solid fa-user"></i>
      )}
    </button>
  );
};

export default ProfileIcon;
