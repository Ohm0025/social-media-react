type Props = {
  radius: string;
  textSize: string;
  bgColor?: string;
  openDropdown?: () => void;
  isOpen?: boolean | undefined;
};

const ProfileIcon = ({
  radius,
  textSize,
  bgColor = "#f7f7f7",
  openDropdown = () => {},
  isOpen,
}: Props) => {
  return (
    <button
      onClick={openDropdown}
      className={`rounded-full w-[30px] h-[30px] text-[13px] sm:w-[${radius}] sm:h-[${radius}] sm:text-[${textSize}] overflow-hidden bg-[${
        isOpen ? "#ffbc12" : bgColor
      }] text-center`}>
      {false ? <img src="" alt="" /> : <i className="fa-solid fa-user"></i>}
    </button>
  );
};

export default ProfileIcon;
