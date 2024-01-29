import { useState } from "react";
import BumblebeeLogo from "./BumblebeeLogo";
import HomeUserBtn from "./HomeUserBtn";
import ProfileBtn from "./ProfileBtn";
import UserDropdown from "./UserDropdown";
import ChatBox from "../chatBox/ChatBox";

type Props = {
  removeCookie: () => void;
  changeValidUser: (value: boolean) => void;
};

const TopBar = ({ removeCookie, changeValidUser }: Props) => {
  const [isOpen, setIsOpen] = useState<string>("");
  return (
    <div className="flex items-center bg-[#ffcb08] px-3 py-2 justify-between shadow-md sticky top-0 min-w-[300px]">
      <BumblebeeLogo />
      <HomeUserBtn />
      <ProfileBtn
        isOpen={isOpen}
        openDropdown={() =>
          setIsOpen(() => {
            if (isOpen === "") {
              return "profileBtn";
            }
            return "";
          })
        }
        openChat={() =>
          setIsOpen(() => {
            if (isOpen === "") {
              return "chatBtn";
            }
            return "";
          })
        }
      />
      <ChatBox
        isOpen={isOpen === "chatBtn"}
        currentUser={""}
        recipientSocketID={""}
      />
      <UserDropdown
        isOpen={isOpen === "profileBtn"}
        closeDropdown={() =>
          setIsOpen(() => {
            return "";
          })
        }
        removeCookie={removeCookie}
        changeValidUser={changeValidUser}
      />
    </div>
  );
};

export default TopBar;
