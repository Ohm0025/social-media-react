import { API_URL } from "../../utils/constant";
import { formatPicName } from "../../utils/formatPicName";

type Props = {
  radius: string;
  textSize: string;
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
      className={`rounded-full w-[30px] h-[30px] text-[13px] sm:w-[${radius}] sm:h-[${radius}] sm:text-[${textSize}] overflow-hidden bg-[${
        isOpen ? "#ffbc12" : bgColor
      }] text-center`}>
      {profilePicture ? (
        <img
          src={`${API_URL}+/images+${formatPicName(profilePicture)}`}
          alt=""
        />
      ) : (
        <i className="fa-solid fa-user"></i>
      )}
    </button>
  );
};

export default ProfileIcon;
