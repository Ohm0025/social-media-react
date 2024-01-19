import ProfileIcon from "../etc/ProfileIcon";

type Props = {
  openDropdown?: () => void;
};

const ProfileBtn = ({ openDropdown = function () {} }: Props) => {
  return (
    <div className="flex gap-1">
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-brands fa-rocketchat"></i>
      </button>
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-solid fa-bell"></i>
      </button>
      <ProfileIcon openDropdown={openDropdown} radius="50px" textSize="26px" />
    </div>
  );
};

export default ProfileBtn;
