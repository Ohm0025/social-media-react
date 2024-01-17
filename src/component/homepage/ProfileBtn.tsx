import ProfileIcon from "../etc/ProfileIcon";

const ProfileBtn = () => {
  return (
    <div className="flex gap-1">
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-brands fa-rocketchat"></i>
      </button>
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-solid fa-bell"></i>
      </button>
      <ProfileIcon radius="50px" textSize="26px" />
    </div>
  );
};

export default ProfileBtn;
