type Props = {
  radius: string;
  textSize: string;
  bgColor?: string;
  openDropdown?: () => void;
};

const ProfileIcon = ({
  radius,
  textSize,
  bgColor = "#f7f7f7",
  openDropdown = () => {},
}: Props) => {
  return (
    <button
      onClick={openDropdown}
      className={`rounded-full w-[${radius}] h-[${radius}] overflow-hidden text-[${textSize}] bg-[${bgColor}] text-center`}>
      {false ? <img src="" alt="" /> : <i className="fa-solid fa-user"></i>}
    </button>
  );
};

export default ProfileIcon;
