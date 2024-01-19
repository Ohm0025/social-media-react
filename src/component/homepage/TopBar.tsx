import { useState } from "react";
import BumblebeeLogo from "./BumblebeeLogo";
import HomeUserBtn from "./HomeUserBtn";
import ProfileBtn from "./ProfileBtn";
import UserDropdown from "./UserDropdown";

type Props = {
  removeCookie: () => void;
};

const TopBar = ({ removeCookie }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center bg-[#ffcb08] px-3 py-2 justify-between shadow-md sticky top-0">
      <BumblebeeLogo />
      <HomeUserBtn />
      <ProfileBtn openDropdown={() => setIsOpen((prev) => !prev)} />
      <UserDropdown isOpen={isOpen} removeCookie={removeCookie} />
    </div>
  );
};

export default TopBar;
