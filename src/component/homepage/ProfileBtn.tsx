import ProfileIcon from "../etc/ProfileIcon";

const chatBtn = "chatBtn";
const notiBtn = "notiBtn";
const profileBtn = "profileBtn";

type Props = {
  isOpen: string;
  openDropdown?: () => void;
  openChat?: () => void;
};

const ProfileBtn = ({
  isOpen,
  openDropdown = function () {},
  openChat = function () {},
}: Props) => {
  return (
    <div className="flex gap-1">
      <button
        onClick={openChat}
        className={`rounded-full w-[30px] h-[30px] text-[13px] sm:w-[50px] sm:h-[50px] sm:text-[26px] ${
          isOpen === chatBtn ? "bg-[#ffbc12]" : "bg-[#f7f7f7]"
        } text-center`}>
        <i className="fa-brands fa-rocketchat"></i>
      </button>
      <button
        className={`rounded-full w-[30px] h-[30px] text-[13px] sm:w-[50px] sm:h-[50px] sm:text-[26px] ${
          isOpen === notiBtn ? "bg-[#ffbc12]" : "bg-[#f7f7f7]"
        } text-center`}>
        <i className="fa-solid fa-bell"></i>
      </button>
      <ProfileIcon
        openDropdown={openDropdown}
        radius="50px"
        textSize="26px"
        isOpen={isOpen === profileBtn}
      />
    </div>
  );
};

export default ProfileBtn;
